import { useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';
import { UnitsList } from 'store/Nutrients/Slice';
import { useTranslation } from 'react-i18next';

const getAllNutrients = async (data, search, filters) => {
  return await api.get(
    `menus/nutrient-units/`.concat(
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
const getOneNutrient = async ({ queryKey }) => {
  if (queryKey[1]) return await api.get(`menus/nutrient-units/${queryKey[1]}`);
  else return 0;
};

const postCreateNutrientRequest = async data => {
  return await api.post('menus/nutrient-units/', data);
};
const patchNutrientRequest = async data => {
  return await api.patch(`menus/nutrient-units/${data?.id}/`, data);
};
const ActivateNutrient = async data => {
  return await api.patch(`menus/nutrient-units/${data.id}/`, data);
};
const DeleteNutrient = async data => {
  return await api.delete(`menus/nutrient-units/${data.id}`);
};

const useCreateNutrientHook = () => {
  const QueryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  return useMutation(postCreateNutrientRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('Units');
      dispatch(ToastShow('Nutrient Unit Created Successfully'));
      router.history.push('/nutrients/units');
    },
    onError: err => {
      console.log(err);
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

const useGetAllNutrientsHook = (search, filters) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  return useQuery(
    ['Units', i18n.language, search, filters],
    () => getAllNutrients(i18n.language, search, filters),
    {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        dispatch(UnitsList(result.data.results));
      },
      onError: err => {
        console.log(err, 'err');
        dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
      }
    }
  );
};
const useGetOneNutrientHook = id => {
  const dispatch = useDispatch();
  return useQuery(['Units', id], getOneNutrient, {
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
const useUpdateNutrientHook = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(patchNutrientRequest, {
    onSuccess: res => {
      QueryClient.invalidateQueries('Units');
      dispatch(ToastShow('Nutrient Unit Updated Successfully'));
      router.history.push('/nutrients/units');
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useActivateNutrientHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(ActivateNutrient, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('Units');
      dispatch(ToastShow('Nutrient Unit Updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
const useDeleteNutrientHook = () => {
  const dispatch = useDispatch();
  const QueryClient = useQueryClient();
  return useMutation(DeleteNutrient, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('Units');
      dispatch(ToastShow('Nutrient Unit Deleted Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

export {
  useCreateNutrientHook,
  useGetAllNutrientsHook,
  useGetOneNutrientHook,
  useUpdateNutrientHook,
  useActivateNutrientHook,
  useDeleteNutrientHook
};
