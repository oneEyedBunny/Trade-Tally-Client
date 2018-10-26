// import { GET_ALL_USERS_SUCCESS, getAllUsers, ADD_NEW_USER_SUCCESS, addNewUser, LOGIN_SUCCESS, login, LOGOUT_SUCCESS, logout } from "../actions/auth-users";
//
// describe('getAllUsers', () => {
//     it('Should return the action', ()=>{
//        const action = getAllUsers();
//        expect(action.type).toEqual(GET_ALL_USERS_SUCCESS);
//        expect(action.users).toEqual(users);
//     })
// })
//
// describe('addNewUser', () => {
//     it('Should return the action', () => {
//         const user = {
//           firstName: 'Tessa',
//           lastName: 'Tester',
//           email: 'testing@fake.com',
//           profession: 'Tester',
//           username: 'TessaTester',
//           password: 'Testing123',
//         }
//         const action = addNewUser(user);
//         expect(action.type).toEqual(ADD_NEW_USER_SUCCESS);
//         expect(action.user).toEqual(user);
//     })
// })
//
// describe('login', () => {
//     it('Should return the action', () => {
//         const credentials = localStorage.getAuthToken(authToken);
//         const action = login(credentials);
//         expect(action.type).toEqual(LOGIN_SUCCESS);
//         expect(action.user).toEqual(user);
//     })
// })
//
// describe('logout', () => {
//     it('Should return the action', () => {
//         const action = logout();
//         expect(action.type).toEqual(LOGOUT_SUCCESS);
//         expect(state.user).toEqual({
//             authToken: null,
//             isLoggedIn: "false"
//             userId: null,
//             users: [],
//         })
//     })
// })
