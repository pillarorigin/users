import React from 'react';

const App = () => {
    //Hook : useState()
    // TODO : Email입력창에 값이 -> state에 저장이 되도록 구성하기
    const checkEmail = () => {

    };
    const handleSubmit = () => {

    };

    return (
        <div className="row justify-content-center">
            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input 
                            type="email" 
                            class="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            //state 저장이 되도록 구성( onChange={} )
                        />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="InputPassword1">비밀번호</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            id="InputPassword1" 
                        />
                    </div>
                    <div class="form-group">
                        <label for="InputPassword2">비밀번호확인</label>
                        <input 
                            type="password2" 
                            class="form-control" 
                            id="InputPassword2" 
                        />
                    </div>
                    <div class="form-group form-check">
                        <input 
                            type="checkbox" 
                            class="form-check-input" 
                            id="exampleCheck1" 
                            />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default App;
