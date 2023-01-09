import { useDispatch } from 'react-redux';
import { useMutation, useQuery } from 'react-query';
import { api } from '../../../axios';
import { ToastShow } from 'store/Global/Slice';
import { setProduct } from 'store/Products/Slice';

const getProduct = async ({ queryKey }) => {
  if (queryKey[1]) return await api.get(`/menus/products/${queryKey[1]}`);
  else return 0;
};
const UpdateProductImage = async data => {
  const id = data.get('id');
  return await api.patch(`/menus/products/${id}/`, data);
};
const UpdateProductRequest = async data => {
  return await api.patch(`/menus/products/${data.id}/`, data);
};

const useGetProductHook = id => {
  const dispatch = useDispatch();
  return useQuery(['Product', id], getProduct, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      setProduct(result.data);
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

const useUpdateProductImageHook = () => {
  const dispatch = useDispatch();
  return useMutation(UpdateProductImage, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      setProduct(result.data);
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};

const useUpdateProductHook = () => {
  const dispatch = useDispatch();
  return useMutation(UpdateProductRequest, {
    onSuccess: res => {
      const result = {
        status: res.status + '-' + res.statusText,
        headers: res.headers,
        data: res.data
      };
      dispatch(ToastShow('Product Updated Successfully'));
      return result.data;
    },
    onError: err => {
      console.log(err, 'err');
      dispatch(ToastShow({ message: 'Something Went Wrong', type: 'error' }));
    }
  });
};
export { useGetProductHook, useUpdateProductHook, useUpdateProductImageHook };
