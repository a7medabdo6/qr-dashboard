import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';

import { UserInfo } from 'store/Auth/Slice';
import { GroupsList } from 'store/Groups/Slice';

const getAllGroups = async data => {
  return await api.get('branches/groups/');
};
const postrequest = async data => {
  console.log(data, 'datttt');
  return await api.post(
    'auth/login/',
    {
      password: data.password,
      email: data.email
    },
    {
      headers: {
        BusisnessName: data.busniess
      }
    }
  );
};
const postCreateGrouprequest = async data => {
  return await api.post('branches/groups/', data);
};
const ActivateUser = async data => {
  return await api.patch(`auth/users/${data.id}/`, data);
};
const DeleteUser = async data => {
  return await api.delete(`auth/users/${data.id}`);
};
const useLoginApi = data => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postrequest, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      console.log(result);
      dispatch(UserInfo(result.data));
      // return result;
      localStorage.setItem('user', JSON.stringify(result.data));
      localStorage.setItem('token', JSON.stringify(result.data.token));
      window.location.replace('/');
      //   setTimeout(() => {
      //     router.history.push('/');
      //   }, 500);

      return result.data;
    },
    onError: err => {
      console.log(err);
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
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
    }
  });
};

const useGetAllGroupsHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery('allgroups', getAllGroups, {
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
  });
};
const useActivateUserHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(ActivateUser, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allusers');
      console.log(result);
      // dispatch(TenantList(result.data.results));
      dispatch(ToastShow('user updated Successfuly'));
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
const useDeleteUserHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(DeleteUser, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allusers');

      dispatch(ToastShow('user Deleted Successfuly'));

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
  useLoginApi,
  useCreateGroupHook,
  useGetAllGroupsHook,
  useActivateUserHook,
  useDeleteUserHook
};
