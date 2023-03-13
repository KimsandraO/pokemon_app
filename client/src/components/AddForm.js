import React from "react";

function AddForm() {
  return (
    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-sm-12 blue-color">ADD NEW POKEMON</div>
      </div>
      <form>
        <div class="row">
          <div class="col-sm-6 gray-color">
            <div class="mb-3 p-5">
              <label class="form-label">Name OF YOUR POKEMON</label>
              <input
                type="text"
                class="form-control rounded-pill p-2 border border-primary"
                placeholder="Pokemon Name..."
              />
              <label class="form-label mt-3">IMAGE</label>
              <input
                type="text"
                class="form-control rounded-pill p-2 border border-primary"
                placeholder="Image Link..."
              />
              <label class="form-label mt-3">DESCRIPTION</label>
              <textarea
                class="form-control form-textarea"
                placeholder="Leave a comment here..."
              ></textarea>
            </div>
          </div>
          <div class="col-sm-6 yellow-color">
            <div className="row mt-5">
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">HEIGHT</label>
                  <input
                    type="text"
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 2' 00"
                  />
                </div>
              </div>
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">WEIGHT</label>
                  <input
                    type="text"
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="ex: 18,7"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div class="p-5">
                  <label class="form-label">ABILITIES</label>
                  <input
                    type="text"
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                  />
                </div>
              </div>
              <div className="col">
                <div class="p-5">
                  <label class="form-label">WEAKNESS</label>
                  <input
                    type="text"
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">GENDER</label>
                  <input
                    type="text"
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                  />
                </div>
              </div>
              <div className="col">
                <div class="p-1 ms-5 me-5">
                  <label class="form-label">TYPE</label>
                  <input
                    type="text"
                    class="form-control rounded-pill p-2 border border-primary"
                    placeholder="type one or more"
                  />
                </div>
              </div>
            </div>
            <div class="row mt-5 mb-4">
              <div className="col-5"></div>
              <div className="col-2">
                <button class="btn btn-primary" id="addform-btn" type="submit">
                  SUBMIT
                </button>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-sm-12 blue1-color mb-3"></div>
      </div>
    </div>
  );
}

export default AddForm;
