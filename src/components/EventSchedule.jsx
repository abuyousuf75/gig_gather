

const EventSchedule = () => {
    return (
        <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="bg-[#3d285c] text-xl text-white">
            <tr>
              <th>Time</th>
              <th>Schedule</th>
              <th>Designation</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                7:30 Am -9:30 Am
              </th>
              
              <td>
              Registration + Breakfast
              </td>
              <td>
                --------
              </td>
              <td>Conference Auditorium</td>
              
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                9:30 AM-10AM
              </th>
              
              <td>
              Introduction
              </td>
              <td>
                --------
              </td>
              <td>Conference Auditorium</td>
              
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br/>
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
             
             
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br/>
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
             
             
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
             
            </tr>
          </tfoot>
          
        </table>
      </div>
    );
};

export default EventSchedule;