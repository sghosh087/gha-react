import React from "react";

export const Contact = () => {
    return <div className="homeCss.home">
        <h1>Contact Us</h1>
        <div>
            <form>
                <div className="form-control">
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-control">
                    <textarea rows="20" cols="40" />
                </div>
                <button className="btn btn-submit" type="submit">Send</button>
            </form>
        </div>
    </div>
}