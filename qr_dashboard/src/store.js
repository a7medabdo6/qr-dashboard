import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'store/Auth/Slice';
import tenantReducer from 'store/Tenant/Slice';
import GlobalReducer from 'store/Global/Slice';
import groupReducer from 'store/Groups/Slice';
import branchReducer from 'store/Branches/Slice';

export const store = configureStore({
  reducer: {
    UserInfo: userReducer,
    TenantList: tenantReducer,
    GlobalState: GlobalReducer,
    Groups: groupReducer,
    Branches: branchReducer
  }
});
