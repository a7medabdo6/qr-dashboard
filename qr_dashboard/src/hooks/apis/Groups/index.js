import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';

import { UserInfo } from 'store/Auth/Slice';
import { GroupsList } from 'store/Groups/Slice';
import { useTranslation } from 'react-i18next';

const getAllGroups = async (data, search, filters) => {
  return await api.get(
    `branches/groups/?find=${search}&create_at_before=${filters?.create_at_before}&create_at_after=${filters?.create_at_after}&active=${filters.active}`,
    {
      headers: {
        'Accept-Language': data
      }
    }
  );
};
const getOneGroup = async ({ queryKey }) => {
  return await api.get(`branches/groups/${queryKey[1]}`);
};
const postCreateGrouprequest = async data => {
  return await api.post('branches/groups/', data);
};
const ActivateGroup = async data => {
  return await api.patch(`branches/groups/${data.id}/`, data);
};
const DeleteGroup = async data => {
  return await api.delete(`branches/groups/${data.id}`);
};

const useCreateGroupHook = () => {
  const QueryClient = useQueryClient();

  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postCreateGrouprequest, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allgroups');

      dispatch(ToastShow('Group Created Successfuly'));
    },
    onError: err => {
      console.log(err);
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
      // dispatch(ToastShow('Group Created Successfuly'));
    }
  });
};

const useGetAllGroupsHook = (search, filters) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return useQuery(
    ['allgroups', i18n.language, search, filters],
    () => getAllGroups(i18n.language, search, filters),
    {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        // console.log(result);
        dispatch(GroupsList(result.data.results));
        // console.log(result.data, 'result.data');

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
      QueryClient.invalidateQueries('allgroups');
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
      QueryClient.invalidateQueries('allgroups');

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
  useCreateGroupHook,
  useGetAllGroupsHook,
  useActivateGroupHook,
  useDeleteGroupHook,
  useGetOneGroupHook
};
