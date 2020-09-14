import ajax from './ajax';

export const reqRegister = (user) => ajax('/register', user, 'POST');

export const reqLogin = (user) => ajax('/login', user,'POST');

export const reqSyncUser = (user) => ajax('/update', user,'POST');

export const reqUser = () => ajax('/update');

export const reqUserList = (type) => ajax('/userlist',{type})
