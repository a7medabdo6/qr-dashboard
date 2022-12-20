import { useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';
import { CategoryList } from 'store/Category/Slice';
import { useTranslation } from 'react-i18next';

const getAllCatgory = async (data, search, filters) => {
  console.log('data: ', data);
  console.log('search: ', search);
  console.log('filters: ', filters);
  return await api.get(
    `menus/categories/?`.concat(
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
const getOneCategory = async ({ queryKey }) => {
  if (queryKey[1]) return await api.get(`menus/categories/${queryKey[1]}`);
  else return 0;
};
const getMainCategories = async () => {
  return await api.get(`menus/categories/?parent=true`);
};
const getSubcategories = async () => {
  return await api.get(`menus/categories/?parent=false`);
};
const postCreateCategoryRequest = async data => {
  return await api.post('menus/categories/', data);
};
const patchCategoryRequest = async data => {
  return await api.patch(`menus/categories/${data.id}/`, data);
};
const ActivateCategory = async data => {
  return await api.patch(`menus/categories/${data.id}/`, data);
};
const DeleteCategory = async data => {
  return await api.delete(`menus/categories/${data.id}`);
};

const useCreateCategoryHook = () => {
  const QueryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postCreateCategoryRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('allCategory');
      dispatch(ToastShow('Category Created Successfully'));
      router.history.push('/Category');
    },
    onError: err => {
      console.log(err);
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

const useGetAllCategoryHook = (search, filters) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  return useQuery(
    ['allCategory', i18n.language, search, filters],
    () => getAllCatgory(i18n.language, search, filters),
    {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        dispatch(CategoryList(result.data.results));
      },
      onError: err => {
        console.log(err, 'err');
        dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
      }
    }
  );
};
const useGetOneCategoryHook = id => {
  const dispatch = useDispatch();
  return useQuery(['allCategory', id], getOneCategory, {
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
const useUpdateCategoryHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(patchCategoryRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('allCategory');
      dispatch(ToastShow('Category Updated Successfully'));
      router.history.push('/Category');
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useActivateCategoryHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(ActivateCategory, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allCategory');
      dispatch(ToastShow('Category Updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useDeleteCategoryHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(DeleteCategory, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allCategory');
      dispatch(ToastShow('Category Deleted Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useGetMainCategoryHook = () => {
  const dispatch = useDispatch();
  return useQuery(['allCategory'], getMainCategories, {
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
const useGetSubcategoryHook = () => {
  const dispatch = useDispatch();
  return useQuery(['subCategories'], getSubcategories, {
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
export {
  useCreateCategoryHook,
  useGetAllCategoryHook,
  useGetOneCategoryHook,
  useUpdateCategoryHook,
  useActivateCategoryHook,
  useDeleteCategoryHook,
  useGetMainCategoryHook,
  useGetSubcategoryHook
};
