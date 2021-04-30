import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                id={name}
                className="form-control" />
            {error && <div className="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                {error}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>}
        </div>
    );
}

export default Input;
