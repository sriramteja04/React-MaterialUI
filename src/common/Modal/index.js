import React from 'react';

const Index = props => {
    const { header, content, actions } = props;
    return (
        <div className={'modal__background'}>
            <div className={'modal__card'}>
                <div className={'modal__heading'}>{header}</div>
                <div className={'modal__content'}>{content}</div>
                <div className={'modal__actions'}>{actions}</div>
            </div>
        </div>
    );
};

export default React.memo(Index);
