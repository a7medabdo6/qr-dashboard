import { useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';
import { IngredientList } from 'store/Ingredient/Slice';
import { useTranslation } from 'react-i18next';

const getAllIngredients = async (data, search, filters) => {
  return await api.get(
    `menus/ingredients/`.concat(
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
const getOneIngredient = async ({ queryKey }) => {
  if (queryKey[1]) return await api.get(`menus/ingredients/${queryKey[1]}`);
  else return 0;
};

const postCreateIngredientRequest = async data => {
  return await api.post('menus/ingredients/', data);
};
const patchIngredientRequest = async data => {
  const id = data.get('id');
  return await api.patch(`menus/ingredients/${id}/`, data);
};
const ActivateIngredient = async data => {
  return await api.patch(`menus/ingredients/${data.id}/`, data);
};
const DeleteIngredient = async data => {
  return await api.delete(`menus/ingredients/${data.id}`);
};

const useCreateIngredientHook = () => {
  const QueryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postCreateIngredientRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('Ingredients');
      dispatch(ToastShow('Ingredient Created Successfully'));
      router.history.push('/ingredients');
    },
    onError: err => {
      console.log(err);
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

const useGetAllIngredientsHook = (search, filters) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  return useQuery(
    ['Ingredients', i18n.language, search, filters],
    () => getAllIngredients(i18n.language, search, filters),
    {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        dispatch(IngredientList(result.data.results));
      },
      onError: err => {
        console.log(err, 'err');
        dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
      }
    }
  );
};
const useGetOneIngredientHook = id => {
  const dispatch = useDispatch();
  return useQuery(['Ingredients', id], getOneIngredient, {
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
const useUpdateIngredientHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(patchIngredientRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('Ingredients');
      dispatch(ToastShow('Ingredient Updated Successfully'));
      router.history.push('/ingredients');
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useActivateIngredientHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(ActivateIngredient, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('Ingredients');
      dispatch(ToastShow('Ingredient Updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useDeleteIngredientHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(DeleteIngredient, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('Ingredients');
      dispatch(ToastShow('Ingredient Deleted Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

export {
  useCreateIngredientHook,
  useGetAllIngredientsHook,
  useGetOneIngredientHook,
  useUpdateIngredientHook,
  useActivateIngredientHook,
  useDeleteIngredientHook
};
