import { userTableReducer, UserStateReducer } from './userTableReducer';
import { actionsEnums } from '../common/actionsEnums';
import { filterByValueAction, filterEnums, initializeUsersAction, sortTableAction } from '../components/userTable/actions/';

describe('userTableReducer', () => {
    const users = [
        { id: 1, first_name: "Randall", last_name: "Bollini", email: "rbollini80@wordpress.com", gender: "Male", ip_address: "236.175.148.165", avatar: "https://robohash.org/laborumillumvero.png?size=50x50&set=set1" },
        { id: 2, first_name: "Keen", last_name: "Peplaw", email: "kpeplaw81@desdev.cn", gender: "Male", ip_address: "104.31.88.253", avatar: "https://robohash.org/eosblanditiiscorporis.png?size=50x50&set=set1" },
        { id: 3, first_name: "Tiphanie", last_name: "Myles", email: "tmyles82@fema.gov", gender: "Female", ip_address: "63.172.191.40", avatar: "https://robohash.org/eumnonet.png?size=50x50&set=set1" },
    ];
    it('Intialize users', () => {
        // Arrange
        const initialState : UserStateReducer = {
            initial_users: [],
            users_filtered: [],
        }
        const action = initializeUsersAction(users);
        // Act
        const finalState: UserStateReducer = userTableReducer(initialState, action);
        // Assert
        expect(finalState.initial_users.length).toBe(3);
    });
    it('filter male users', () => {
        // Arrange
        const initialState: UserStateReducer = {
            initial_users: users,
            users_filtered: []
        };
        const action = filterByValueAction({
            filterType: filterEnums.gender,
            value: 'Male'
        });
        // Act
        const finalState: UserStateReducer = userTableReducer(initialState, action);
        // Assert
        expect(finalState.users_filtered.length).toBe(2);
    });
    it('filter female users', () => {
        // Arrange
        const initialState: UserStateReducer = {
            initial_users: users,
            users_filtered: []
        };
        const action = filterByValueAction({
            filterType: filterEnums.gender,
            value: 'Female'
        });
        // Act
        const finalState: UserStateReducer = userTableReducer(initialState, action);
        // Assert
        expect(finalState.users_filtered.length).toBe(1);
    });
    it('filter male users', () => {
        // Arrange
        const initialState: UserStateReducer = {
            initial_users: users,
            users_filtered: []
        };
        const action = filterByValueAction({
            filterType: filterEnums.gender,
            value: 'Male'
        });
        // Act
        const finalState: UserStateReducer = userTableReducer(initialState, action);
        // Assert
        expect(finalState.users_filtered.length).toBe(2);
    });
    it('filter by first name', ()=> {
        // Arrange
        const initialState: UserStateReducer = {
            initial_users: users,
            users_filtered: []
        }
        const action = filterByValueAction({
                filterType: filterEnums.first_name,
                value: 'a'
            });
        // Act
        const finalState: UserStateReducer = userTableReducer(initialState, action);
        // Assert
        expect(finalState.users_filtered.length).toBe(2)
    });
    it('filter by name', ()=> {
        // Arrange
        const initialState: UserStateReducer = {
            initial_users: users,
            users_filtered: []
        }
        const action = filterByValueAction({
            filterType: filterEnums.last_name,
            value: 'a'
        });
        // Act
        const finalState: UserStateReducer = userTableReducer(initialState, action);
        // Assert
        expect(finalState.users_filtered.length).toBe(1);
    });
    it('Sort users by field', ()=>{
        // Arrange
        const initialState: UserStateReducer = {
            initial_users: users,
            users_filtered: []
        }
        const action = sortTableAction(filterEnums.first_name);
        // Act
        const finalState: UserStateReducer = userTableReducer(initialState, action);
        // Assert
        expect(finalState.users_filtered[0].first_name).toBe('Keen');
        expect(finalState.users_filtered[1].first_name).toBe('Randall');
        expect(finalState.users_filtered[2].first_name).toBe('Tiphanie');
    });
});
