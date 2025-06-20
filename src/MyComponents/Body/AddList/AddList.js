import React, { useState, useEffect } from "react";
import Toast from "../Toast";

export default function AddList({ addNewList }) {
    const [newTitle, setNewTitle] = useState("");

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

    const save = (e) => {
        e.preventDefault();
        if (newTitle.trim().length === 0) {
            setToast({ msg: "Title Cannot be Empty!!", toastType: "-1" });
        }
        else {
            addNewList(newTitle);
            setNewTitle("");
        }
    };


    return (
        <>
            {toast && <Toast msg={toast.msg} toastType={toast.toastType} />}
            <h4 className="ms-4 mt-3 ">Add Anime</h4>
            <div className="my-1" style={{ width: '100%' }}>
                <div className="card rounded-4">
                    <div className="card-body">
                        <form className='my-3' onSubmit={save}>
                            <div className="mb-3">
                                <h5 htmlFor="AnimeTitle" className="form-label ms-2">Anime Title</h5>
                                <input type="text" value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} className="form-control rounded-pill" id="AnimeTitle" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary rounded-pill">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
