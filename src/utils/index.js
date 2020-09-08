function redirectUPage(type, avatar) {
  let path = (type.toLowerCase()==='recruiter')? '/recruiter' : '/candidate';
  return avatar? path : path+='-page';
}

//  edit profile  ,  userMainPage
export{redirectUPage}
