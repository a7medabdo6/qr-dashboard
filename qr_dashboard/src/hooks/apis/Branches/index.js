import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';

import { UserInfo } from 'store/Auth/Slice';
import { GroupsList } from 'store/Groups/Slice';
import { BranchesList } from 'store/Branches/Slice';

const getAllBranches = async data => {
  return await api.get('branches/');
};
const getOneGroup = async ({ queryKey }) => {
  return await api.get(`branches/${queryKey[1]}`);
};
const postCreateBranchrequest = async data => {
  return await api.post('branches/', data);
};
const ActivateGroup = async data => {
  return await api.patch(`branches/groups/${data.id}/`, data);
};
const DeleteGroup = async data => {
  return await api.delete(`branches/groups/${data.id}`);
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
  const router = useRouter();
  return useQuery('allbranches', getAllBranches, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      // console.log(result);
      dispatch(BranchesList(result.data.results));
      // console.log(result.data, 'result.data');

      // return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
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
const useActivateGroupHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(ActivateGroup, {
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
const useDeleteGroupHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(DeleteGroup, {
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
  useActivateGroupHook,
  useDeleteGroupHook,
  useGetOneGroupHook
};
