import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';

import { UserInfo } from 'store/Auth/Slice';
import { GroupsList } from 'store/Groups/Slice';
import { BranchesList } from 'store/Branches/Slice';
import { useTranslation } from 'react-i18next';
const lang = localStorage.getItem('i18nextLng');

const getAllBranches = async data => {
  console.log(data, 'axios data');
  return await api.get('branches/?expand=group', {
    headers: {
      'Accept-Language': data
    }
  });
};
const getOneGroup = async ({ queryKey }) => {
  return await api.get(`branches/${queryKey[1]}`);
};
const postCreateBranchrequest = async data => {
  return await api.post('branches/', data);
};
const ActivateBranch = async data => {
  return await api.patch(`branches/${data.id}/`, data);
};
const DeleteBranch = async data => {
  return await api.delete(`branches/${data.id}`);
};

const useCreateBranchHook = () => {
  const QueryClient = useQueryClient();

  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postCreateBranchrequest, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allbranches');

      dispatch(ToastShow('Branch Created Successfuly'));
    },
    onError: err => {
      console.log(err);
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};

const useGetAllBranchesHook = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { lang } = useSelector(state => state.GlobalState);
  console.log(i18n.language, 'i18n.language');
  const router = useRouter();
  return useQuery(
    ['allbranches', i18n.language],
    () => getAllBranches(i18n.language),
    {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        // console.log(result);
        dispatch(BranchesList(result.data.results));
        console.log(result.data, 'result.data');

        // return result.data;
      },
      onError: err => {
        console.log(err, 'err');
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
      }
    }
  );
};
const useGetOneGroupHook = id => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery(['onegroup', id], getOneGroup, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      // console.log(result);
      // dispatch(TenantList(result.data.results));

      // console.log(result.data, 'result.data');

      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};
const useActivateBranchHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(ActivateBranch, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allbranches');
      console.log(result);
      // dispatch(TenantList(result.data.results));
      dispatch(ToastShow('group updated Successfuly'));
      // console.log(result.data, 'result.data');

      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};
const useDeleteBranchHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(DeleteBranch, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allbranches');

      dispatch(ToastShow('group Deleted Successfuly'));

      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};
export {
  useCreateBranchHook,
  useGetAllBranchesHook,
  useActivateBranchHook,
  useDeleteBranchHook,
  useGetOneGroupHook
};
