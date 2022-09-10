import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from '../../../axios';
import useRouter from 'utils/useRouter';

import { TenantList } from 'store/Tenant/Slice';
import { ToastShow } from 'store/Global/Slice';
const getAllTenants = async data => {
  return await api.get('tenants/');
};
const getOneTenants = async ({ queryKey }) => {
  return await api.get(`tenants/${queryKey[1]}`);
};
const CreateTenant = async data => {
  return await api.post('tenants/', data);
};
const DeleteTenant = async data => {
  return await api.delete(`tenants/${data.id}`);
};
const ActivateTenant = async data => {
  const { id } = data;
  return await api.patch(`tenants/${id}/`, data);
};
const useGetTenantHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery('allTenants', getAllTenants, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      console.log(result);
      dispatch(TenantList(result.data.results));

      console.log(result.data, 'result.data');

      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      //   dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    }
  });
};
const useGetOneTenantHook = id => {
  const dispatch = useDispatch();
  const router = useRouter();
  return useQuery(['allTenants', id], getOneTenants, {
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

const useCreateTenantHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(CreateTenant, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allTenants');
      console.log(result);
      // dispatch(TenantList(result.data.results));
      dispatch(ToastShow('Tenant Created Successfully'));
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
const useActivateTenantHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(ActivateTenant, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allTenants');
      console.log(result);
      // dispatch(TenantList(result.data.results));
      dispatch(ToastShow('Tenant updated Successfully'));
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

const useDeleteTenantHook = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const QueryClient = useQueryClient();
  return useMutation(DeleteTenant, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      QueryClient.invalidateQueries('allTenants');

      dispatch(ToastShow('Tenant Deleted Successfully'));

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
  useGetTenantHook,
  useCreateTenantHook,
  useDeleteTenantHook,
  useActivateTenantHook,
  useGetOneTenantHook
};
