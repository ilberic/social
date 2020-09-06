import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, text: "Всем привет!", likesCount: '100'},
            {id: 2, text: "Мой первый пост!", likesCount: '12321'},
            {id: 3, text: "!!!!!", likesCount: '100123'},
            {id: 4, text: "Уаыаыв", likesCount: '101230'}
        ]
    },
    dialogsPage: {
        messagesData: [
            {id: 1, img: "https://sun9-21.userapi.com/72phjrBhQhe23zfHX_f80V5D5aDh4gtUQxnAhg/ROjiwszuWKw.jpg", label: "Привет!", sendBy: "Вадим Беляев"},
            {id: 2, img: "https://sun9-21.userapi.com/72phjrBhQhe23zfHX_f80V5D5aDh4gtUQxnAhg/ROjiwszuWKw.jpg4", label: "Как ты?", sendBy: "Вадим Беляев"},
            {id: 3, img: "https://sun9-68.userapi.com/ZY4OxgoMTid1uSIFyQgZihUTsaS_qofNu7DlyQ/KSE5VcQkuJM.jpg", label: "Привет", sendBy: "Аделия Шаяхметова"},
            {id: 4, img: "https://sun9-68.userapi.com/ZY4OxgoMTid1uSIFyQgZihUTsaS_qofNu7DlyQ/KSE5VcQkuJM.jpg", label: "Норм", sendBy: "Аделия Шаяхметова "}
        ],
        friendsData: [
            {name: "Аделия Шаяхметова", img: "https://sun9-68.userapi.com/ZY4OxgoMTid1uSIFyQgZihUTsaS_qofNu7DlyQ/KSE5VcQkuJM.jpg", id: "1"},
            {name: "Камень Камнев", img: "https://sun1-84.userapi.com/impf/c638925/v638925724/25f75/nncXLHuXIA8.jpg?size=400x0&quality=90&crop=0,0,476,476&sign=3bc5d0ca11f6f859d9f10041f04b3383&ava=1", id: "2"},
            {name: "Эмиль Харисов", img: "https://sun1-19.userapi.com/c857228/v857228933/1cdf9f/kfB3IP8Jcsc.jpg", id: "3"}
        ]
    }
}

export let addPost = postMessage => {
    let newPost = {
        id: 5,
        text: postMessage,
        likesCount: 123321
    };
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}



export default state