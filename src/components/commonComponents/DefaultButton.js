import React, { useEffect, useState } from 'react'
import DelayedLink from '../../common/DelayedLink';

export const DefaultButton = ({ data }) => {

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
        if (data && data.projectsButtonAction) {
            const urlString = data.projectsButtonAction;
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
            group={data.projectsButtonAction}
            class="btn-blue"
            data-cursor-style="off"
        >
            <span>{data.projectsButtonLabel}</span>
            <i className="icon-arrow-right-2"></i>
        </btn-modal-open>
    ) : (
        <DelayedLink to={data.projectsButtonAction} target={actionType === "external_link" ? "_blank" : undefined}>
            <button className="btn-blue" data-cursor-style="off" >
                <span>{data.projectsButtonLabel}</span>
                <i className="icon-arrow-right-2"></i>
            </button>
        </DelayedLink>
    )
}
