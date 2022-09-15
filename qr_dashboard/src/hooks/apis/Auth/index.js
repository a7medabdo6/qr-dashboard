import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';
import { useTranslation } from 'react-i18next';

import { UserInfo, UsersList } from 'store/Auth/Slice';
const getAllUsers = async data => {
  return await api.get('auth/users/', {
    headers: {
      'Accept-Language': data
    }
  });
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
const postCreateUserrequest = async data => {
  return await api.post('auth/users/', data);
};
const postChangePasswordRequest = async data => {
  return await api.post('auth/users/set_password/', data);
};
const ActivateUser = async data => {
  return await api.patch(`auth/users/${data.id}/`, data);
};
const getOneUser = async ({ queryKey }) => {
  return await api.get(`auth/users/${queryKey[1]}`);
};
const getActiveUser = async () => {
  return await api.get(`auth/users/me/`);
};
const UpdateSingleUser = async data => {
  const id = data.get('id');
  return await api.patch(`auth/users/${id}/`, data);
};
const UpdateActiveUser = async data => {
  return await api.patch(`auth/users/me/`, data);
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
      dispatch(ToastShow('User Created Successfully'));
    },
    onError: err => {
      console.log(err);
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};

const useChangePasswordHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postChangePasswordRequest, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      dispatch(ToastShow('Password Changed Successfully'));
    },
    onError: err => {
      console.log(err);
    }
  });
};

const useGetAllUsersHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  return useQuery(
    ['allusers', i18n.language],
    () => getAllUsers(i18n.language),
    {
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
    }
  );
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
      dispatch(ToastShow('user updated Successfully'));
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
const useGetOneUserHook = id => {
  return useQuery(['allUsers', id], getOneUser, {
    onSuccess: res => {
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');
    }
  });
};
const useGetActiveUserHook = () => {
  const dispatch = useDispatch();
  return useQuery(['allUsers'], getActiveUser, {
    onSuccess: res => {
      dispatch(UserInfo(res.data));
      return res.data;
    },
    onError: err => {
      console.log(err, 'err');
    }
  });
};
const useUpdateSingleUserHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(UpdateSingleUser, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allusers');
      console.log(result);
      dispatch(ToastShow('User updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
    }
  });
};
const useUpdateActiveUserHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(UpdateActiveUser, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allusers');
      console.log('useUpdateActiveUserHook', result);
      dispatch(UserInfo(res.data));
      dispatch(ToastShow('User updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
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

      dispatch(ToastShow('user Deleted Successfully'));

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
  useGetOneUserHook,
  useGetActiveUserHook,
  useUpdateSingleUserHook,
  useDeleteUserHook,
  useUpdateActiveUserHook,
  useChangePasswordHook
};
