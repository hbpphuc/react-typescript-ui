import { ArrowDownOutlined, ArrowUpOutlined, BlockOutlined, BookOutlined, CalendarOutlined, CarryOutOutlined, DesktopOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons'
import { Calendar, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import Chart from '../../components/chart/Chart'
import './Dashboard.css'

export default function Dashboard() {

  const [time, setTime] = useState('ngày')
  const [timestamp, setTimestamp] = useState('Tháng 11/2021')

  const handleChange = (e:any) => {
    setTime(e.target.value)
    if(e.target.value === 'tháng'){
      setTimestamp('Năm 2021')
    }else{
      setTimestamp('Tháng 11/2021')
    }
  }

  return (
    <div className='dashboard'>
      <div className="chart">
        <p className="dashboard-title">Biểu đồ cấp số</p>
        <div className="chart-general">
          <div className="chart-type">
            <div className="chart-type-title">
              <div className='type-icon icon-1'><CalendarOutlined/></div>
              <div className="type-title">Số thứ tự đã cấp</div>
            </div>
            <div className="chart-type-quantity">
              <div className="type-quantity">4.221</div>
              <div className="type-percent percent-increase"><ArrowUpOutlined className='icon-increase'/>32.41%</div>
            </div>
          </div>
          <div className="chart-type">
            <div className="chart-type-title">
              <div className='type-icon icon-2'><CarryOutOutlined /></div>
              <div className="type-title">Số thứ tự đã sử dụng</div>
            </div>
            <div className="chart-type-quantity">
              <div className="type-quantity">3.721</div>
              <div className="type-percent percent-decrease"><ArrowDownOutlined className='icon-decrease'/>32.41%</div>
            </div>
          </div>
          <div className="chart-type">
            <div className="chart-type-title">
              <div className='type-icon icon-3'><PhoneOutlined /></div>
              <div className="type-title">Số thứ tự đang chờ</div>
            </div>
            <div className="chart-type-quantity">
              <div className="type-quantity">468</div>
              <div className="type-percent percent-increase"><ArrowUpOutlined className='icon-increase'/>56.41%</div>
            </div>
          </div>
          <div className="chart-type">
            <div className="chart-type-title">
              <div className='type-icon icon-4'><BookOutlined /></div>
              <div className="type-title">Số thứ tự đã bỏ qua</div>
            </div>
            <div className="chart-type-quantity">
              <div className="type-quantity">32</div>
              <div className="type-percent percent-decrease"><ArrowDownOutlined className='icon-decrease'/>22.41%</div>
            </div>
          </div>
        </div>
        <div className="chart-static">
          <div className="chart-static-header">
            <div className="static-top">
              <p className='static-p1'>Bảng thống kê theo {time}</p>
              <p className='static-p2'>{timestamp}</p>
            </div>
            <div className="static-time-selector">
              <span>Xem theo</span>
              <select name="time" id="time" className='time-select' onChange={handleChange}>
                <option className='time-option' value="ngày">Ngày</option>
                <option className='time-option' value="tuần">Tuần</option>
                <option className='time-option' value="tháng">Tháng</option>
              </select>
            </div>
          </div>
          <div className="chart-static-content">
            <Chart />
          </div>
        </div>
      </div>
      <div className="chart-overview">
        <p className="overview-title">Tổng quan</p>
        <div className="overview-wrapper">
          <div className="overview-info">
            <div className="overview-progress">
              <div className="progress-bar">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM2.50418 30C2.50418 45.1855 14.8145 57.4958 30 57.4958C45.1855 57.4958 57.4958 45.1855 57.4958 30C57.4958 14.8145 45.1855 2.50418 30 2.50418C14.8145 2.50418 2.50418 14.8145 2.50418 30Z" fill="#EAEAEC"/>
                  <path d="M55 30C55 43.8071 43.8071 55 30 55C16.1929 55 5 43.8071 5 30C5 16.1929 16.1929 5 30 5C43.8071 5 55 16.1929 55 30ZM7.51045 30C7.51045 42.4206 17.5794 52.4895 30 52.4895C42.4206 52.4895 52.4895 42.4206 52.4895 30C52.4895 17.5794 42.4206 7.51045 30 7.51045C17.5794 7.51045 7.51045 17.5794 7.51045 30Z" fill="#EAEAEC"/>
                  <path d="M30 6.25C30 5.55964 30.5601 4.99674 31.2496 5.03124C35.6721 5.25251 39.9574 6.64486 43.6653 9.06537C44.2434 9.44273 44.3657 10.2273 43.9599 10.7859C43.5541 11.3444 42.7741 11.465 42.194 11.0908C38.916 8.97686 35.1439 7.75125 31.2494 7.53471C30.5601 7.49638 30 6.94036 30 6.25Z" fill="#7E7D88"/>
                  <path d="M30 1.25209C30 0.56058 30.5609 -0.00272785 31.2518 0.0261116C37.9469 0.305574 44.3698 2.82033 49.4834 7.18782C54.9151 11.8269 58.5132 18.2518 59.6306 25.307C60.7481 32.3621 59.3115 39.5845 55.5792 45.675C51.8469 51.7654 46.064 56.3244 39.2705 58.5317C32.477 60.739 25.1188 60.4499 18.5195 57.7164C11.9201 54.9828 6.51269 49.9843 3.2698 43.6197C0.0269051 37.2552 -0.83862 29.9424 0.828905 22.9966C2.39881 16.4575 6.11688 10.6478 11.3691 6.48641C11.9111 6.05697 12.696 6.183 13.1024 6.74245C13.5089 7.30189 13.3828 8.0827 12.8425 8.51419C8.07188 12.3236 4.6946 17.6219 3.26389 23.5812C1.73556 29.9472 2.52884 36.6496 5.50104 42.4828C8.47324 48.3161 13.4293 52.8975 19.4778 55.4028C25.5263 57.9082 32.2703 58.1732 38.4967 56.1501C44.7231 54.127 50.0233 49.9486 53.444 44.3665C56.8648 38.7844 58.1814 32.1649 57.1573 25.6987C56.1331 19.2325 52.8354 13.3438 47.8571 9.09202C43.1969 5.11179 37.3503 2.81045 31.2517 2.53267C30.5609 2.5012 30 1.9436 30 1.25209Z" fill="#FF7506"/>
                  <path d="M18.878 25.004C20.1287 25.004 21.09 25.4287 21.762 26.278C22.4433 27.118 22.784 28.322 22.784 29.89C22.784 30.9633 22.6253 31.8967 22.308 32.69C21.9907 33.474 21.5333 34.076 20.936 34.496C20.348 34.916 19.6527 35.126 18.85 35.126C18.318 35.126 17.7813 35.0327 17.24 34.846C16.708 34.65 16.2553 34.3887 15.882 34.062C15.7607 33.9593 15.672 33.8613 15.616 33.768C15.5693 33.6653 15.546 33.544 15.546 33.404C15.546 33.1987 15.602 33.026 15.714 32.886C15.8353 32.7367 15.9753 32.662 16.134 32.662C16.2273 32.662 16.316 32.6807 16.4 32.718C16.484 32.746 16.5867 32.7973 16.708 32.872C17.4827 33.4133 18.1733 33.684 18.78 33.684C19.4613 33.684 19.998 33.3713 20.39 32.746C20.782 32.1113 20.9873 31.2247 21.006 30.086C20.7913 30.506 20.4693 30.842 20.04 31.094C19.6107 31.3367 19.13 31.458 18.598 31.458C18.01 31.458 17.4873 31.3273 17.03 31.066C16.5727 30.7953 16.2133 30.422 15.952 29.946C15.7 29.4607 15.574 28.91 15.574 28.294C15.574 27.6593 15.714 27.0947 15.994 26.6C16.2833 26.096 16.6753 25.704 17.17 25.424C17.674 25.144 18.2433 25.004 18.878 25.004ZM18.976 30.03C19.4987 30.03 19.9187 29.8667 20.236 29.54C20.5627 29.204 20.726 28.77 20.726 28.238C20.726 27.6967 20.5627 27.2627 20.236 26.936C19.9187 26.6 19.4987 26.432 18.976 26.432C18.4627 26.432 18.052 26.6 17.744 26.936C17.436 27.2627 17.282 27.6967 17.282 28.238C17.282 28.7793 17.436 29.2133 17.744 29.54C18.052 29.8667 18.4627 30.03 18.976 30.03ZM27.5945 35.126C26.4279 35.126 25.5365 34.6967 24.9205 33.838C24.3045 32.97 23.9965 31.71 23.9965 30.058C23.9965 28.4153 24.3045 27.1647 24.9205 26.306C25.5365 25.438 26.4279 25.004 27.5945 25.004C28.7612 25.004 29.6525 25.438 30.2685 26.306C30.8845 27.1647 31.1925 28.4153 31.1925 30.058C31.1925 31.7007 30.8845 32.956 30.2685 33.824C29.6525 34.692 28.7612 35.126 27.5945 35.126ZM27.5945 33.712C28.2292 33.712 28.6912 33.4227 28.9805 32.844C29.2699 32.256 29.4145 31.3273 29.4145 30.058C29.4145 28.7793 29.2699 27.8553 28.9805 27.286C28.6912 26.7073 28.2292 26.418 27.5945 26.418C26.9599 26.418 26.4979 26.7073 26.2085 27.286C25.9192 27.8647 25.7745 28.7887 25.7745 30.058C25.7745 31.3273 25.9192 32.256 26.2085 32.844C26.4979 33.4227 26.9599 33.712 27.5945 33.712ZM36.4371 34.804C36.3531 34.9533 36.2504 35.0653 36.1291 35.14C36.0077 35.2147 35.8864 35.252 35.7651 35.252C35.5971 35.252 35.4477 35.1913 35.3171 35.07C35.1957 34.9487 35.1351 34.7947 35.1351 34.608C35.1351 34.4493 35.1817 34.2907 35.2751 34.132L40.3711 25.326C40.4551 25.1767 40.5577 25.0647 40.6791 24.99C40.8004 24.9153 40.9217 24.878 41.0431 24.878C41.2111 24.878 41.3557 24.9387 41.4771 25.06C41.6077 25.1813 41.6731 25.3353 41.6731 25.522C41.6731 25.6807 41.6264 25.8393 41.5331 25.998L36.4371 34.804ZM34.8831 31.024C34.0991 31.024 33.4877 30.7673 33.0491 30.254C32.6104 29.7407 32.3911 28.9893 32.3911 28C32.3911 27.02 32.6104 26.2733 33.0491 25.76C33.4877 25.2467 34.0991 24.99 34.8831 24.99C35.6671 24.99 36.2784 25.2467 36.7171 25.76C37.1651 26.2733 37.3891 27.02 37.3891 28C37.3891 28.9893 37.1651 29.7407 36.7171 30.254C36.2784 30.7673 35.6671 31.024 34.8831 31.024ZM34.8831 29.89C35.2377 29.89 35.4944 29.7453 35.6531 29.456C35.8211 29.1573 35.9051 28.672 35.9051 28C35.9051 27.3467 35.8211 26.8707 35.6531 26.572C35.4851 26.2733 35.2284 26.124 34.8831 26.124C34.5377 26.124 34.2811 26.2733 34.1131 26.572C33.9544 26.8613 33.8751 27.3373 33.8751 28C33.8751 28.672 33.9544 29.1573 34.1131 29.456C34.2811 29.7453 34.5377 29.89 34.8831 29.89ZM41.9251 35.098C41.1411 35.098 40.5297 34.8413 40.0911 34.328C39.6524 33.8147 39.4331 33.0587 39.4331 32.06C39.4331 31.08 39.6524 30.338 40.0911 29.834C40.5391 29.3207 41.1504 29.064 41.9251 29.064C42.7091 29.064 43.3204 29.3207 43.7591 29.834C44.1977 30.3473 44.4171 31.094 44.4171 32.074C44.4171 33.0633 44.1977 33.8147 43.7591 34.328C43.3204 34.8413 42.7091 35.098 41.9251 35.098ZM41.9251 33.964C42.2704 33.964 42.5271 33.8193 42.6951 33.53C42.8631 33.2313 42.9471 32.746 42.9471 32.074C42.9471 31.4207 42.8631 30.9447 42.6951 30.646C42.5271 30.3473 42.2704 30.198 41.9251 30.198C41.5797 30.198 41.3231 30.3473 41.1551 30.646C40.9871 30.9447 40.9031 31.4207 40.9031 32.074C40.9031 32.746 40.9871 33.2313 41.1551 33.53C41.3231 33.8193 41.5797 33.964 41.9251 33.964Z" fill="#535261"/>
                </svg>
              </div>
              <div className="overview-type">
                <div className="ovtype-quantity">4.221</div> 
                <div className="ovtype-name" id='color-1'><DesktopOutlined /> Thiết bị</div>
              </div>
              <div className="overview-status">
                <p className="status"><span className='dot' id='bgcolor-1'></span>Đang hoạt động <span className='span-num' id='color-1'>3.799</span></p>
                <p className="status"><span className='dot'></span>Ngưng hoạt động <span className='span-num' id='color-1'>422</span></p>
              </div>
            </div>
            <div className="overview-progress">
              <div className="progress-bar">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM2.50418 30C2.50418 45.1855 14.8145 57.4958 30 57.4958C45.1855 57.4958 57.4958 45.1855 57.4958 30C57.4958 14.8145 45.1855 2.50418 30 2.50418C14.8145 2.50418 2.50418 14.8145 2.50418 30Z" fill="#EAEAEC"/>
                  <path d="M55 30C55 43.8071 43.8071 55 30 55C16.1929 55 5 43.8071 5 30C5 16.1929 16.1929 5 30 5C43.8071 5 55 16.1929 55 30ZM7.51045 30C7.51045 42.4206 17.5794 52.4895 30 52.4895C42.4206 52.4895 52.4895 42.4206 52.4895 30C52.4895 17.5794 42.4206 7.51045 30 7.51045C17.5794 7.51045 7.51045 17.5794 7.51045 30Z" fill="#EAEAEC"/>
                  <path d="M30 6.25C30 5.55964 30.5601 4.99674 31.2496 5.03122C37.1562 5.32663 42.7829 7.70889 47.1137 11.7758C51.4445 15.8427 54.1753 21.3087 54.841 27.1851C54.9188 27.8711 54.3921 28.4654 53.7031 28.5087C53.0141 28.5521 52.424 28.0279 52.3425 27.3424C51.7192 22.1008 49.2695 17.2297 45.4023 13.5982C41.5351 9.96667 36.5199 7.82766 31.2495 7.53469C30.5602 7.49638 30 6.94036 30 6.25Z" fill="#7E7D88"/>
                  <path d="M30 1.25209C30 0.56058 30.5609 -0.00272752 31.2518 0.0261201C36.8261 0.258866 42.2344 2.04233 46.8625 5.18758C51.8363 8.5678 55.6795 13.3648 57.8933 18.9563C60.1071 24.5477 60.5894 30.6754 59.2775 36.5443C57.9656 42.4132 54.9202 47.7524 50.5364 51.8691C46.1526 55.9857 40.6327 58.6899 34.693 59.6306C28.7533 60.5714 22.668 59.7053 17.2266 57.1448C11.7852 54.5843 7.23898 50.4475 4.17774 45.2712C1.32929 40.4548 -0.111064 34.9452 0.00666527 29.3673C0.0212572 28.6759 0.618672 28.1515 1.30882 28.1949C1.99896 28.2383 2.52025 28.8332 2.50828 29.5246C2.42044 34.6012 3.74031 39.6122 6.33319 43.9965C9.1389 48.7407 13.3057 52.5322 18.2928 54.879C23.28 57.2257 28.8574 58.0195 34.3013 57.1573C39.7452 56.2951 44.8043 53.8166 48.8222 50.0436C52.8401 46.2705 55.6313 41.377 56.8336 35.998C58.036 30.619 57.594 25.0028 55.565 19.8781C53.536 14.7534 50.0136 10.3568 45.4549 7.25874C41.2421 4.39568 36.3239 2.76378 31.2518 2.53268C30.561 2.50121 30 1.9436 30 1.25209Z" fill="#4277FF"/>
                  <path d="M22.042 25.13C22.2847 25.13 22.4713 25.2 22.602 25.34C22.7327 25.4707 22.798 25.6433 22.798 25.858C22.798 26.0727 22.7327 26.2967 22.602 26.53L18.136 34.636C17.9493 34.9533 17.6927 35.112 17.366 35.112C17.142 35.112 16.9413 35.0373 16.764 34.888C16.596 34.7293 16.512 34.538 16.512 34.314C16.512 34.1553 16.5587 33.9967 16.652 33.838L20.67 26.586H16.442C15.882 26.586 15.602 26.348 15.602 25.872C15.602 25.3773 15.882 25.13 16.442 25.13H22.042ZM28.1965 28.672C28.7845 28.672 29.3072 28.8073 29.7645 29.078C30.2219 29.3393 30.5765 29.7127 30.8285 30.198C31.0899 30.674 31.2205 31.22 31.2205 31.836C31.2205 32.4707 31.0759 33.04 30.7865 33.544C30.5065 34.0387 30.1145 34.426 29.6105 34.706C29.1159 34.986 28.5512 35.126 27.9165 35.126C26.6659 35.126 25.6999 34.706 25.0185 33.866C24.3465 33.0167 24.0105 31.808 24.0105 30.24C24.0105 29.1667 24.1692 28.238 24.4865 27.454C24.8039 26.6607 25.2565 26.054 25.8445 25.634C26.4419 25.214 27.1419 25.004 27.9445 25.004C28.4765 25.004 29.0085 25.102 29.5405 25.298C30.0819 25.4847 30.5392 25.7413 30.9125 26.068C31.0339 26.1707 31.1179 26.2733 31.1645 26.376C31.2205 26.4693 31.2485 26.586 31.2485 26.726C31.2485 26.9313 31.1879 27.1087 31.0665 27.258C30.9545 27.398 30.8192 27.468 30.6605 27.468C30.5672 27.468 30.4785 27.454 30.3945 27.426C30.3105 27.3887 30.2079 27.3327 30.0865 27.258C29.3119 26.7167 28.6212 26.446 28.0145 26.446C27.3332 26.446 26.7965 26.7633 26.4045 27.398C26.0125 28.0233 25.8072 28.9053 25.7885 30.044C26.0032 29.624 26.3252 29.2927 26.7545 29.05C27.1839 28.798 27.6645 28.672 28.1965 28.672ZM27.8185 33.698C28.3319 33.698 28.7425 33.5347 29.0505 33.208C29.3585 32.872 29.5125 32.4333 29.5125 31.892C29.5125 31.3507 29.3585 30.9167 29.0505 30.59C28.7425 30.2633 28.3319 30.1 27.8185 30.1C27.2959 30.1 26.8712 30.268 26.5445 30.604C26.2272 30.9307 26.0685 31.36 26.0685 31.892C26.0685 32.4333 26.2272 32.872 26.5445 33.208C26.8712 33.5347 27.2959 33.698 27.8185 33.698ZM36.4371 34.804C36.3531 34.9533 36.2504 35.0653 36.1291 35.14C36.0077 35.2147 35.8864 35.252 35.7651 35.252C35.5971 35.252 35.4477 35.1913 35.3171 35.07C35.1957 34.9487 35.1351 34.7947 35.1351 34.608C35.1351 34.4493 35.1817 34.2907 35.2751 34.132L40.3711 25.326C40.4551 25.1767 40.5577 25.0647 40.6791 24.99C40.8004 24.9153 40.9217 24.878 41.0431 24.878C41.2111 24.878 41.3557 24.9387 41.4771 25.06C41.6077 25.1813 41.6731 25.3353 41.6731 25.522C41.6731 25.6807 41.6264 25.8393 41.5331 25.998L36.4371 34.804ZM34.8831 31.024C34.0991 31.024 33.4877 30.7673 33.0491 30.254C32.6104 29.7407 32.3911 28.9893 32.3911 28C32.3911 27.02 32.6104 26.2733 33.0491 25.76C33.4877 25.2467 34.0991 24.99 34.8831 24.99C35.6671 24.99 36.2784 25.2467 36.7171 25.76C37.1651 26.2733 37.3891 27.02 37.3891 28C37.3891 28.9893 37.1651 29.7407 36.7171 30.254C36.2784 30.7673 35.6671 31.024 34.8831 31.024ZM34.8831 29.89C35.2377 29.89 35.4944 29.7453 35.6531 29.456C35.8211 29.1573 35.9051 28.672 35.9051 28C35.9051 27.3467 35.8211 26.8707 35.6531 26.572C35.4851 26.2733 35.2284 26.124 34.8831 26.124C34.5377 26.124 34.2811 26.2733 34.1131 26.572C33.9544 26.8613 33.8751 27.3373 33.8751 28C33.8751 28.672 33.9544 29.1573 34.1131 29.456C34.2811 29.7453 34.5377 29.89 34.8831 29.89ZM41.9251 35.098C41.1411 35.098 40.5297 34.8413 40.0911 34.328C39.6524 33.8147 39.4331 33.0587 39.4331 32.06C39.4331 31.08 39.6524 30.338 40.0911 29.834C40.5391 29.3207 41.1504 29.064 41.9251 29.064C42.7091 29.064 43.3204 29.3207 43.7591 29.834C44.1977 30.3473 44.4171 31.094 44.4171 32.074C44.4171 33.0633 44.1977 33.8147 43.7591 34.328C43.3204 34.8413 42.7091 35.098 41.9251 35.098ZM41.9251 33.964C42.2704 33.964 42.5271 33.8193 42.6951 33.53C42.8631 33.2313 42.9471 32.746 42.9471 32.074C42.9471 31.4207 42.8631 30.9447 42.6951 30.646C42.5271 30.3473 42.2704 30.198 41.9251 30.198C41.5797 30.198 41.3231 30.3473 41.1551 30.646C40.9871 30.9447 40.9031 31.4207 40.9031 32.074C40.9031 32.746 40.9871 33.2313 41.1551 33.53C41.3231 33.8193 41.5797 33.964 41.9251 33.964Z" fill="#535261"/>
                </svg>
              </div>
              <div className="overview-type">
                <div className="ovtype-quantity">276</div>
                <div className="ovtype-name" id='color-2'><MessageOutlined /> Dịch vụ</div>
              </div>
              <div className="overview-status">
                <p className="status"><span className='dot' id='bgcolor-2'></span>Đang hoạt động <span className='span-num' id='color-2'>3.799</span></p>
                <p className="status"><span className='dot'></span>Ngưng hoạt động <span className='span-num' id='color-2'>422</span></p>
              </div>
            </div>
            <div className="overview-progress">
              <div className="progress-bar">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM2.50418 30C2.50418 45.1855 14.8145 57.4958 30 57.4958C45.1855 57.4958 57.4958 45.1855 57.4958 30C57.4958 14.8145 45.1855 2.50418 30 2.50418C14.8145 2.50418 2.50418 14.8145 2.50418 30Z" fill="#EAEAEC"/>
                  <path d="M55 30C55 43.8071 43.8071 55 30 55C16.1929 55 5 43.8071 5 30C5 16.1929 16.1929 5 30 5C43.8071 5 55 16.1929 55 30ZM7.51045 30C7.51045 42.4206 17.5794 52.4895 30 52.4895C42.4206 52.4895 52.4895 42.4206 52.4895 30C52.4895 17.5794 42.4206 7.51045 30 7.51045C17.5794 7.51045 7.51045 17.5794 7.51045 30Z" fill="#EAEAEC"/>
                  <path d="M30 6.25C30 5.55964 30.56 4.99674 31.2495 5.03124C35.1411 5.22596 38.9338 6.32783 42.3239 8.24865C42.9246 8.58897 43.0958 9.36433 42.7259 9.94722C42.356 10.5301 41.5851 10.6994 40.9826 10.3625C37.9956 8.69193 34.6665 7.72472 31.2494 7.53471C30.5601 7.49638 30 6.94036 30 6.25Z" fill="#7E7D88"/>
                  <path d="M30 1.25209C30 0.56058 30.5609 -0.0027286 31.2518 0.0261127C37.6258 0.292188 43.7615 2.58475 48.7573 6.58709C54.0793 10.8508 57.7899 16.8006 59.2775 23.4557C60.7651 30.1108 59.9409 37.0742 56.9408 43.1982C53.9407 49.3222 48.9437 54.2413 42.7734 57.1448C36.603 60.0484 29.6276 60.763 22.9966 59.1711C16.3657 57.5791 10.475 53.7756 6.29535 48.3872C2.11571 42.9989 -0.103415 36.3473 0.00370115 29.5288C0.104249 23.1283 2.2489 16.9393 6.10682 11.8584C6.525 11.3077 7.31654 11.2346 7.84936 11.6754C8.38218 12.1162 8.45426 12.9038 8.03818 13.4561C4.54199 18.0971 2.59918 23.7369 2.50757 29.5681C2.4094 35.8175 4.44329 41.9138 8.27404 46.8524C12.1048 51.791 17.5038 55.277 23.5812 56.7361C29.6587 58.1952 36.0519 57.5401 41.7071 54.879C47.3624 52.2178 51.9423 47.7093 54.692 42.0965C57.4417 36.4837 58.1971 30.1016 56.8336 24.002C55.4702 17.9024 52.0694 12.4493 47.1916 8.54143C42.6401 4.89504 37.0562 2.79709 31.2517 2.53267C30.5609 2.50121 30 1.9436 30 1.25209Z" fill="#35C75A"/>
                  <path d="M21.09 29.932C21.6687 30.0907 22.112 30.38 22.42 30.8C22.7373 31.22 22.896 31.7333 22.896 32.34C22.896 33.208 22.5693 33.8893 21.916 34.384C21.2627 34.8693 20.3573 35.112 19.2 35.112C18.0427 35.112 17.1373 34.8693 16.484 34.384C15.8307 33.8893 15.504 33.208 15.504 32.34C15.504 31.7333 15.6627 31.22 15.98 30.8C16.2973 30.3707 16.7453 30.0813 17.324 29.932C16.8293 29.7453 16.442 29.456 16.162 29.064C15.882 28.6627 15.742 28.196 15.742 27.664C15.742 26.8427 16.05 26.194 16.666 25.718C17.282 25.242 18.1267 25.004 19.2 25.004C20.2733 25.004 21.118 25.242 21.734 25.718C22.35 26.194 22.658 26.8427 22.658 27.664C22.658 28.2053 22.518 28.6767 22.238 29.078C21.958 29.4793 21.5753 29.764 21.09 29.932ZM19.2 26.418C18.0333 26.418 17.45 26.894 17.45 27.846C17.45 28.322 17.5947 28.686 17.884 28.938C18.1827 29.1807 18.6213 29.302 19.2 29.302C19.7787 29.302 20.2127 29.1807 20.502 28.938C20.8007 28.686 20.95 28.322 20.95 27.846C20.95 26.894 20.3667 26.418 19.2 26.418ZM19.2 33.698C20.5347 33.698 21.202 33.1987 21.202 32.2C21.202 31.2013 20.5347 30.702 19.2 30.702C17.8653 30.702 17.198 31.2013 17.198 32.2C17.198 33.1987 17.8653 33.698 19.2 33.698ZM28.1965 28.672C28.7845 28.672 29.3072 28.8073 29.7645 29.078C30.2219 29.3393 30.5765 29.7127 30.8285 30.198C31.0899 30.674 31.2205 31.22 31.2205 31.836C31.2205 32.4707 31.0759 33.04 30.7865 33.544C30.5065 34.0387 30.1145 34.426 29.6105 34.706C29.1159 34.986 28.5512 35.126 27.9165 35.126C26.6659 35.126 25.6999 34.706 25.0185 33.866C24.3465 33.0167 24.0105 31.808 24.0105 30.24C24.0105 29.1667 24.1692 28.238 24.4865 27.454C24.8039 26.6607 25.2565 26.054 25.8445 25.634C26.4419 25.214 27.1419 25.004 27.9445 25.004C28.4765 25.004 29.0085 25.102 29.5405 25.298C30.0819 25.4847 30.5392 25.7413 30.9125 26.068C31.0339 26.1707 31.1179 26.2733 31.1645 26.376C31.2205 26.4693 31.2485 26.586 31.2485 26.726C31.2485 26.9313 31.1879 27.1087 31.0665 27.258C30.9545 27.398 30.8192 27.468 30.6605 27.468C30.5672 27.468 30.4785 27.454 30.3945 27.426C30.3105 27.3887 30.2079 27.3327 30.0865 27.258C29.3119 26.7167 28.6212 26.446 28.0145 26.446C27.3332 26.446 26.7965 26.7633 26.4045 27.398C26.0125 28.0233 25.8072 28.9053 25.7885 30.044C26.0032 29.624 26.3252 29.2927 26.7545 29.05C27.1839 28.798 27.6645 28.672 28.1965 28.672ZM27.8185 33.698C28.3319 33.698 28.7425 33.5347 29.0505 33.208C29.3585 32.872 29.5125 32.4333 29.5125 31.892C29.5125 31.3507 29.3585 30.9167 29.0505 30.59C28.7425 30.2633 28.3319 30.1 27.8185 30.1C27.2959 30.1 26.8712 30.268 26.5445 30.604C26.2272 30.9307 26.0685 31.36 26.0685 31.892C26.0685 32.4333 26.2272 32.872 26.5445 33.208C26.8712 33.5347 27.2959 33.698 27.8185 33.698ZM36.4371 34.804C36.3531 34.9533 36.2504 35.0653 36.1291 35.14C36.0077 35.2147 35.8864 35.252 35.7651 35.252C35.5971 35.252 35.4477 35.1913 35.3171 35.07C35.1957 34.9487 35.1351 34.7947 35.1351 34.608C35.1351 34.4493 35.1817 34.2907 35.2751 34.132L40.3711 25.326C40.4551 25.1767 40.5577 25.0647 40.6791 24.99C40.8004 24.9153 40.9217 24.878 41.0431 24.878C41.2111 24.878 41.3557 24.9387 41.4771 25.06C41.6077 25.1813 41.6731 25.3353 41.6731 25.522C41.6731 25.6807 41.6264 25.8393 41.5331 25.998L36.4371 34.804ZM34.8831 31.024C34.0991 31.024 33.4877 30.7673 33.0491 30.254C32.6104 29.7407 32.3911 28.9893 32.3911 28C32.3911 27.02 32.6104 26.2733 33.0491 25.76C33.4877 25.2467 34.0991 24.99 34.8831 24.99C35.6671 24.99 36.2784 25.2467 36.7171 25.76C37.1651 26.2733 37.3891 27.02 37.3891 28C37.3891 28.9893 37.1651 29.7407 36.7171 30.254C36.2784 30.7673 35.6671 31.024 34.8831 31.024ZM34.8831 29.89C35.2377 29.89 35.4944 29.7453 35.6531 29.456C35.8211 29.1573 35.9051 28.672 35.9051 28C35.9051 27.3467 35.8211 26.8707 35.6531 26.572C35.4851 26.2733 35.2284 26.124 34.8831 26.124C34.5377 26.124 34.2811 26.2733 34.1131 26.572C33.9544 26.8613 33.8751 27.3373 33.8751 28C33.8751 28.672 33.9544 29.1573 34.1131 29.456C34.2811 29.7453 34.5377 29.89 34.8831 29.89ZM41.9251 35.098C41.1411 35.098 40.5297 34.8413 40.0911 34.328C39.6524 33.8147 39.4331 33.0587 39.4331 32.06C39.4331 31.08 39.6524 30.338 40.0911 29.834C40.5391 29.3207 41.1504 29.064 41.9251 29.064C42.7091 29.064 43.3204 29.3207 43.7591 29.834C44.1977 30.3473 44.4171 31.094 44.4171 32.074C44.4171 33.0633 44.1977 33.8147 43.7591 34.328C43.3204 34.8413 42.7091 35.098 41.9251 35.098ZM41.9251 33.964C42.2704 33.964 42.5271 33.8193 42.6951 33.53C42.8631 33.2313 42.9471 32.746 42.9471 32.074C42.9471 31.4207 42.8631 30.9447 42.6951 30.646C42.5271 30.3473 42.2704 30.198 41.9251 30.198C41.5797 30.198 41.3231 30.3473 41.1551 30.646C40.9871 30.9447 40.9031 31.4207 40.9031 32.074C40.9031 32.746 40.9871 33.2313 41.1551 33.53C41.3231 33.8193 41.5797 33.964 41.9251 33.964Z" fill="#535261"/>
                  <path d="M50 30C50 41.0457 41.0457 50 30 50C18.9543 50 10 41.0457 10 30C10 18.9543 18.9543 10 30 10C41.0457 10 50 18.9543 50 30ZM12.0084 30C12.0084 39.9365 20.0635 47.9916 30 47.9916C39.9365 47.9916 47.9916 39.9365 47.9916 30C47.9916 20.0635 39.9365 12.0084 30 12.0084C20.0635 12.0084 12.0084 20.0635 12.0084 30Z" fill="#EAEAEC"/>
                  <path d="M30 11.0042C30 10.4496 30.4499 9.99737 31.0038 10.0252C32.4283 10.0968 33.841 10.3205 35.2179 10.6927C35.7533 10.8374 36.0414 11.4065 35.87 11.9339C35.6987 12.4614 35.1327 12.7471 34.5965 12.6054C33.4212 12.2949 32.2174 12.1042 31.0037 12.0364C30.4499 12.0054 30 11.5588 30 11.0042Z" fill="#F178B6"/>
                </svg>
              </div>
              <div className="overview-type">
                <div className="ovtype-quantity">4.221</div>
                <div className="ovtype-name" id='color-3'><BlockOutlined /> Cấp số</div>
              </div>
              <div className="overview-status">
                <p className="status"><span className='dot' id='bgcolor-3'></span>Đã sử dụng <span className='span-num' id='color-3'>3.721</span></p>
                <p className="status"><span className='dot'></span>Đang chờ <span className='span-num' id='color-3'>486</span></p>
                <p className="status"><span className='dot' id='bgcolor-4'></span>Bỏ qua <span className='span-num' id='color-3'>32</span></p>
              </div>
            </div>
          </div>
          <div className="overview-calendar">
            <Calendar fullscreen={false} className="calendar"/>
          </div>
        </div>
      </div>
    </div>
  )
}
