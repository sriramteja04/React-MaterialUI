import React from 'react';

const Spinner = () => {
    return (
        <div className={'spinner'}>
            <svg
                className={'spinner__svg'}
                version="1.1"
                id="loader-1"
                x="0px"
                y="0px"
                width="60px"
                height="60px"
                padding={'32px'}
                viewBox="0 0 50 50"
                xmlSpace="preserve"
            >
                <path
                    fill="rgb(16, 127, 98)"
                    d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
                >
                    <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.7s"
                        repeatCount="indefinite"
                    />
                </path>
            </svg>
        </div>
    );
};

export default React.memo(Spinner);
