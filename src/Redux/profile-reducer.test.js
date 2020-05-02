import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

    let state = {
        posts: [
            {id: 2, message: 'Hi, how are you?', likesCount: 214},
            {id: 1, message: 'It\'s my first post.', likesCount: 251}
        ]
    };

it('new post should be added', () => {
    let action = addPostActionCreator("dog")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3);
});

it('message of new post should be "dog"', () => {
    let action = addPostActionCreator("dog")

    let newState = profileReducer(state, action)

    expect(newState.posts[0].message).toBe("dog");
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1);
});
