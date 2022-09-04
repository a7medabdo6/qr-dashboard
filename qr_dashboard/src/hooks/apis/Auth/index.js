import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';

import { UserInfo, UsersList } from 'store/Auth/Slice';
const getAllUsers = async data => {
  return await api.get('auth/users/');
};
const postrequest = async data => {
  return await api.post('auth/login/', { password: '123', email: 'admin2' });
};
const postCreateUserrequest = async data => {
  return await api.post('auth/users/', data);
};
const ActivateUser = async data => {
  return await api.patch(`auth/users/${data.id}/`, data);
};
const DeleteUser = async data => {
  return await api.delete(`auth/users/${data.id}`);
};
const useLoginApi = () => {
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

const useCreateUserHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postCreateUserrequest, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      dispatch(ToastShow('User Created Successfuly'));
    },
    onError: err => {
      console.log(err);
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};

const useGetAllUsersHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery('allusers', getAllUsers, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      // console.log(result);
      dispatch(UsersList(result.data.results));
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
  useCreateUserHook,
  useGetAllUsersHook,
  useActivateUserHook,
  useDeleteUserHook
};
