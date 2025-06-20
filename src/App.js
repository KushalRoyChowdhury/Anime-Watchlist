import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./MyComponents/Header/Header";
import AddList from "./MyComponents/Body/AddList/AddList";
import ShowLists from "./MyComponents/Body/ShowList/ShowLists";
import Footer from "./MyComponents/Footer/Footer";
import About from "./MyComponents/Body/About/About";

import Toast from "./MyComponents/Body/Toast";

function App() {
    const [toast, setToast] = useState();
    useEffect(() => {
        if (toast) {
            let timerRemove = setTimeout(() => setToast(false), 3000);
            let timerAddClass = setTimeout(() => {
                const toastElement = document.querySelector(".myToast");
                if (toastElement) {
                    toastElement.classList.add("myToastExit");
                }
            }, 3000 - 250);
            let timerRemoveClass = setTimeout(() => {
                const toastElement = document.querySelector(".myToast");
                if (toastElement) {
                    toastElement.classList.remove("myToastExit");
                }
            }, 3000);

            return (() => {
                clearTimeout(timerRemove);
                clearTimeout(timerAddClass);
                clearTimeout(timerRemoveClass);
            });
        }
    }, [toast]);


    const [animeList, setAnimeList] = useState(
        localStorage.getItem('watchlist_data') ? JSON.parse(localStorage.getItem('watchlist_data')) : []
    );
    useEffect(() => {
        localStorage.setItem('watchlist_data', JSON.stringify(animeList));
    }, [animeList]);

    const onDelete = (animeClicked) => {
        setAnimeList(animeList.filter((anime) => {
            return anime !== animeClicked;
        }));
        setToast({ msg: "'" + animeClicked.title + "' deleted!!", toastType: "-1" });
    };
    const onComplete = (animeClicked) => {
        setAnimeList(animeList.map((anime) =>
            anime === animeClicked ? { ...anime, status: 'Watched' } : anime
        ));
        setToast({ msg: "'" + animeClicked.title + "' marked as Completed.", toastType: "1" });
    };
    const onStarted = (animeClicked) => {
        setAnimeList(animeList.map((anime) =>
            anime === animeClicked ? { ...anime, status: 'Watching' } : anime
        ));
        setToast({ msg: "'" + animeClicked.title + "' marked as Started.", toastType: "0" });
    };

    const addList = (title) => {
        let newSno = 0;
        if (animeList.length > 0) {
            newSno = (animeList[0].sno) + 1;
        }
        let newTitle = {
            sno: newSno,
            title: title,
            status: "Yet to Watch",
        }
        setAnimeList(prevList => [newTitle, ...prevList]);
        setToast({ msg: "Added '" + title + "' to the List.", toastType: "1" });
    };



    return (
        <>
            {toast && <Toast msg={toast.msg} toastType={toast.toastType} />}
            <Header />
            <Routes>
                <Route path="/" element={
                    <div className="container">
                        <AddList addNewList={addList} />
                        <ShowLists
                            animes={animeList}
                            onDelete={onDelete}
                            onComplete={onComplete}
                            onStarted={onStarted}
                        />
                    </div>
                } />

                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
