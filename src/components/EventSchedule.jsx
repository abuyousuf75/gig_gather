import spekaer1 from '../assest/Speaker/1.jpg'
import spekaer2 from '../assest/Speaker/2.jpg'
import spekaer3 from '../assest/Speaker/5.jpg'
import spekaer4 from '../assest/Speaker/6.jpg'

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
                7:30 AM - 9:30 AM
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
                9:30 AM - 10AM
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
              10:00 AM - 10 :30 AM
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={spekaer1} alt="spekaer1" />
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
              <td>Conference Auditorium</td>
            </tr>
            {/* row 4 */}
            <tr>
            <th>
                10:00 AM - 10:30AM
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={spekaer2} alt="spekaer2" />
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
              <td>Conference Auditorium</td>
            </tr>
            {/* row 5 */}
            <tr>
            <th>
                11:00 AM - 11:30AM
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={spekaer3} alt="spekaer3" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Jon Doe</div>
                    <div className="text-sm opacity-50">Usa</div>
                  </div>
                </div>
              </td>
              <td>
               Meta
                <br/>
                <span className="badge badge-ghost badge-sm">It Specialist</span>
              </td>
              <td>Conference Auditorium</td>
            </tr>
            
            {/* row 6 */}
            <tr>
            <th>
                12:00 PM - 12:30PM
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={spekaer4} alt="spekaer4" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Mariya</div>
                    <div className="text-sm opacity-50">Germany</div>
                  </div>
                </div>
              </td>
              <td>
               Google
                <br/>
                <span className="badge badge-ghost badge-sm">Web Devoloper</span>
              </td>
              <td>Conference Auditorium</td>
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