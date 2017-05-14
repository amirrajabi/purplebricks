/**
 * Created by Amir on 9/5/17.
 */
import React from 'react';

const Socials = () => {
    return (
        <ul className="socials list-inline layout--list-reset pull-right">
            <li className="socials__item">
                <a className="socials__link" href="http://" target="_blank">
                    <i className="icon-twitter">
                        <span className="sr-only"></span>
                    </i>
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" href="http://" target="_blank">
                    <i className="icon-facebook">
                        <span className="sr-only"></span>
                    </i>
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" href="http://" target="_blank">
                    <i className="icon-youtube">
                        <span className="sr-only"></span>
                    </i>
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" href="http://" target="_blank">
                    <i className="icon-pinterest">
                        <span className="sr-only"></span>
                    </i>
                </a>
            </li>
            <li className="socials__item">
                <a className="socials__link" href="http://" target="_blank">
                    <i className="icon-gplus">
                        <span className="sr-only"></span>
                    </i>
                </a>
            </li>
        </ul>
    );
};

export default Socials;