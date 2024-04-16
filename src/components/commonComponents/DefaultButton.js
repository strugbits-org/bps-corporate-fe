import React, { useEffect, useState } from 'react'
import DelayedLink from '../../common/DelayedLink';

export const DefaultButton = ({ data, customClasses = "", attributes, showArrow = true }) => {

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
            class={customClasses ? customClasses : 'btn-blue'}
            data-cursor-style="off"
            {...attributes}
        >
            <span>{data.label}</span>
            {showArrow && <i className="icon-arrow-right-2"></i>}
        </btn-modal-open>
    ) : (
        <DelayedLink to={data.action} target={actionType === "external_link" ? "_blank" : undefined}>
            <button className={customClasses ? customClasses : 'btn-blue'} data-cursor-style="off" {...attributes}>
                <span>{data.label}</span>
                {showArrow && <i className="icon-arrow-right-2"></i>}
            </button>
        </DelayedLink>
    )
}
