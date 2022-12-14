import { useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';
import { MenusList } from 'store/Menus/Slice';
import { useTranslation } from 'react-i18next';

const getAllMenus = async (data, search, filters) => {
  console.log('data: ', data);
  console.log('search: ', search);
  console.log('filters: ', filters);
  return await api.get(
    `menus/?expand=branch,timetables&`.concat(
      search ? `find=${search}&` : ``,
      filters?.create_at_before
        ? `create_at_before=${filters?.create_at_before}&`
        : ``,
      filters?.create_at_after
        ? `create_at_after=${filters?.create_at_after}&`
        : ``,
      filters?.active ? `active=${filters?.active}&` : ``
    ),
    data && {
      headers: {
        'Accept-Language': data
      }
    }
  );
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
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

const useGetAllMenusHook = (search, filters) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  return useQuery(
    ['allMenus', i18n.language, search, filters],
    () => getAllMenus(i18n.language, search, filters),
    {
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
        dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
      }
    }
  );
};
const useGetOneMenuHook = id => {
  const dispatch = useDispatch();
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
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
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
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useModifyMenuHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(patchMenuRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('allMenus');
      dispatch(ToastShow('Menu Updated Successfully'));
      // router.history.push('/menu');
      return res;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
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
      dispatch(ToastShow('Menu Updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
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
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
export {
  useCreateMenuHook,
  useGetAllMenusHook,
  useGetOneMenuHook,
  useUpdateMenuHook,
  useActivateMenuHook,
  useDeleteMenuHook,
  useModifyMenuHook
};
