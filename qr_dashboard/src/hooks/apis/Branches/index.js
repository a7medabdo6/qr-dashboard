import { useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';
import { ToastShow } from 'store/Global/Slice';
import { BranchesList } from 'store/Branches/Slice';
import { useTranslation } from 'react-i18next';

const getAllBranches = async (data, search, filters) => {
  return await api.get(
    `branches/?expand=group&find=${search}&create_at_before=${filters?.create_at_before}&create_at_after=${filters?.create_at_after}&active=${filters.active}`,
    {
      headers: {
        'Accept-Language': data
      }
    }
  );
};
const getOneBranch = async ({ queryKey }) => {
  return await api.get(`branches/${queryKey[1]}`);
};
const postCreateBranchrequest = async data => {
  return await api.post('branches/', data);
};
const ActivateBranch = async data => {
  return await api.patch(`branches/${data.id}/`, data);
};
const DeleteBranch = async data => {
  return await api.delete(`branches/${data.id}`);
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

const useGetAllBranchesHook = (search, filters) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  return useQuery(
    ['allbranches', i18n.language, search, filters],
    () => getAllBranches(i18n.language, search, filters),
    {
      onSuccess: res => {
        const result = {
          status: res.status + '-' + res.statusText,
          headers: res.headers,
          data: res.data
        };
        dispatch(BranchesList(result.data.results));
        console.log(result.data, 'result.data');
      },
      onError: err => {
        console.log(err, 'err');
        //   dispatch(errorAtLogin(err.response.data.detail));
        //  return err;
      }
    }
  );
};
const useGetOneBranchHook = id => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery(['allbranches', id], getOneBranch, {
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
const useActivateBranchHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(ActivateBranch, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allbranches');
      console.log(result);
      // dispatch(TenantList(result.data.results));
      dispatch(ToastShow('Branch updated Successfully'));
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
const useDeleteBranchHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(DeleteBranch, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allbranches');

      dispatch(ToastShow('Branch Deleted Successfully'));

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
  useActivateBranchHook,
  useDeleteBranchHook,
  useGetOneBranchHook
};
