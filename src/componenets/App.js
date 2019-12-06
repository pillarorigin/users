import React, { useState } from 'react';

const App = () => {
    //Hook : useState() //Email입력창에 값이 -> state에 저장이 되도록 구성하기
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState('yet');
    const [isPasswordChecked, setIsPasswordChecked ] = useState(false);

    const checkEmail = () => {
        console.log(email) //email input의 value가 담겨 있음
        //Axios -> const targetEmail -> if(targetEmail)
        setIsEmailChecked(true); //setIsEmailChecked(false)
    };
    const handleSubmit = () => {
        //id가 중복인 경우, 비밀번호가 일치하지 않은 경우, 정보를 모두 입력하지 않은 경우. 모두 걸러야 함
        
    };

    return (
        <div className="row justify-content-center">
            <div className="col-8">
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            //state 저장이 되도록 구성( onChange={} )
                            onChange={e => setEmail(e.target.value)}//event 객체에 담긴 input 값이 넘어감  
                            value={email}
                        />
                        <small className="form-text text-muted"> 
                        {/* isEmailCheck의 상태가 3가지. (1. yet을 비교한건 중복된 email 있는지 확인, 2. 사용가능한 e-mail확인, 3. 아직 체크하지 않은 경우) */}
                        {isEmailChecked === 'yet' ? 'e-mail 중복 확인해주세요' : isEmailChecked ? '사용가능한 e-mail입니다':'중복된 e-mail입니다.'}
                        </small>
                        {/* type="button"을 선언 안하면 form의 값이 제출되므로 중복확인 버튼(기능)을 사용할 수 없음. */}
                        <button type="button" className="btn btn-primary" onClick={checkEmail}> 중복확인 </button>
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword1">비밀번호</label>
                        <input
                            type="password"
                            className="form-control"
                            id="InputPassword1"
                            //전달인자 eventListener의 e
                            onChange={e => {
                                setPassword1(e.target.value)
                                setIsPasswordChecked(e.target.value === password2)
                            }}
                            value = {password1}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="InputPassword2">비밀번호확인</label>
                        <input
                            type="password"
                            className="form-control"
                            id="InputPassword2"
                            //onChange와value 동작을 합쳐서 binding이라 함
                            onChange={e=> {
                                setPassword2(e.target.value)
                                setIsPasswordChecked(e.target.value === password1)
                            }}
                            value = {password2}
                        />
                        <small className="form-text text-muted"> 
                        {isPasswordChecked ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
                        </small>
                    </div>

                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1"> 약관에 동의 합니다. </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>
    )
}

export default App;
