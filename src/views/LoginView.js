export function LoginView() {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <h2 class="card-title text-center">
              Login <a href="http://opensnippets.com">gfgdfg</a>
            </h2>
            <div class="card-body py-md-4">
              <form _lpchecked="1">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="d-flex flex-row align-items-center justify-content-between">
                  {/* <a href="#">Login</a> */}
                  <button class="btn btn-primary">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
