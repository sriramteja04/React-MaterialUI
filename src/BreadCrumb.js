import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = props => {
    const { paths } = props;
    let prevPath = '/';
    let homeLink = null;
    let Links = null;
    console.log(paths);
    console.log(paths.split('/'));

    if (paths === '/') {
        homeLink = <Link to={paths}>Home</Link>;
    } else {
        Links = paths
            .split('/')
            .slice(1)
            .map((path, i) => {
                return <Link className={'bread-crumb__list'}>{path}</Link>;
            });
    }

    return (
        <div className={'bread-crumb'}>
            {homeLink}
            {Links}
        </div>
    );
};

export default React.memo(BreadCrumb);
