function ToDoListCard() {
  return (
    <div className="card w-9/12 sm:w-3/4 md:w-1/2 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <div className="tabs tabs-boxed">
          <a className="tab btn btn-sm btn-outline border-none w-1/3">
            Ongoing
          </a>
          <a className="tab btn btn-sm btn-outline border-none w-1/3 tab-active">
            Completed
          </a>
          <a className="tab btn btn-sm btn-outline border-none w-1/3">
            Deleted
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <tbody>
              <tr className="hover form-control">
                <td className="">
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        checked={true}
                        className="checkbox checkbox-accent"
                      />
                      <span className="">Todo 1</span>
                    </label>
                  </div>
                </td>
              </tr>
              <tr className="hover">
                <td className="w-3/4">Hart Hagerty</td>
              </tr>
              <tr className="hover">
                <td className="w-3/4">Brice Swyre</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary justify-end">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ToDoListCard;
