import { CaretRightFilled } from '@ant-design/icons'
import { DatePicker } from 'antd'
import moment from 'moment'
import './History.css'
import ListHistory from './listaccount/ListHistory'

export default function History() {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return (
        <div className="history-wrapper">
            <div className="history-heading">
                <p className="history-title">Danh sách lịch sử</p>
                <div className="history-filter">
                    <div className="history-filter-frame">
                        <label htmlFor="role" className="filter-label">
                            Chọn thời gian
                        </label>
                        <div className="filter-datepicker">
                            <DatePicker
                                defaultValue={moment(
                                    '10/10/2021',
                                    dateFormatList[0]
                                )}
                                format={dateFormatList}
                                className="service-datepicker"
                            />
                            <span>
                                <CaretRightFilled className="filled-arrowleft" />
                            </span>
                            <DatePicker
                                defaultValue={moment(
                                    '18/10/2021',
                                    dateFormatList[0]
                                )}
                                format={dateFormatList}
                                className="service-datepicker"
                            />
                        </div>
                    </div>
                    <div className="history-filter-frame">
                        <label htmlFor="search" className="filter-label">
                            Từ khóa
                        </label>
                        <input
                            type="text"
                            className="search-bar"
                            id="search"
                            placeholder="Nhập từ khóa"
                        />
                    </div>
                </div>
            </div>
            <div className="history-content">
                <ListHistory />
            </div>
        </div>
    )
}
