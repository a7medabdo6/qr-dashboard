import { useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';

import { MenusList } from 'store/Menus/Slice';

const getAllMenus = async () => {
  return await api.get('menus/?expand=branch');
};
const getOneMenu = async ({ queryKey }) => {
  if (queryKey[1]) return await api.get(`menus/${queryKey[1]}`);
  else return 0;
};
const postCreateMenuRequest = async data => {
  return await api.post('menus/', data);
};
const patchMenuRequest = async data => {
  return await api.patch(`menus/${data.id}/`, data);
};
const ActivateMenu = async data => {
  return await api.patch(`menus/${data.id}/`, data);
};
const DeleteMenu = async data => {
  return await api.delete(`menus/${data.id}`);
};

const useCreateMenuHook = () => {
  const QueryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postCreateMenuRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('allMenus');
      dispatch(ToastShow('Menu Created Successfully'));
      router.history.push('/menu');
    },
    onError: err => {
      console.log(err);
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};

const useGetAllMenusHook = () => {
  const dispatch = useDispatch();
  return useQuery('allMenus', getAllMenus, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      dispatch(MenusList(result.data.results));
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};
const useGetOneMenuHook = id => {
  return useQuery(['allMenus', id], getOneMenu, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};
const useUpdateMenuHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(patchMenuRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('allMenus');
      dispatch(ToastShow('Menu Updated Successfully'));
      router.history.push('/menu');
    },
    onError: err => {
      console.log(err, 'err');
    }
  });
};
const useActivateMenuHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(ActivateMenu, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allMenus');
      dispatch(ToastShow('allMenus Updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};
const useDeleteMenuHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(DeleteMenu, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allMenus');
      dispatch(ToastShow('Menus Deleted Successfully'));
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
  useCreateMenuHook,
  useGetAllMenusHook,
  useGetOneMenuHook,
  useUpdateMenuHook,
  useActivateMenuHook,
  useDeleteMenuHook
};
