import React, { useEffect, useState } from 'react'
import DelayedLink from '../../common/DelayedLink';

export const DefaultButton = ({ data, size = "" }) => {

    const [actionType, setActionType] = useState(null);
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }
    useEffect(() => {
        if (data && data.action) {
            const urlString = data.action;
            if (isValidUrl(urlString)) {
                setActionType("external_link");
            } else if (urlString.startsWith("/")) {
                setActionType("internal_link");
            } else {
                setActionType("modal");
            };
        };
    }, [data])

    return actionType === "modal" ? (
        <btn-modal-open
            group={data.action}
            class={`btn-blue ${size}`}
            data-cursor-style="off"
        >
            <span>{data.label}</span>
            <i className="icon-arrow-right-2"></i>
        </btn-modal-open>
    ) : (
        <DelayedLink to={data.action} target={actionType === "external_link" ? "_blank" : undefined}>
            <button className={`btn-blue ${size}`} data-cursor-style="off" >
                <span>{data.label}</span>
                <i className="icon-arrow-right-2"></i>
            </button>
        </DelayedLink>
    )
}
