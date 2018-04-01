// 格式化时间
export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  if (/(y+)/.test(fmt)) {
    let _$1 = RegExp.$1
    let year = (date.getFullYear() + '').substr(4 - _$1.length, _$1.length)
    fmt = fmt.replace(_$1, year)
  }
  let o = {
    'M': date.getMonth() + 1,
    'd': date.getDate(),
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds(),
  }
  fmt = fmt.replace(/(M|d|h|m|s)+/g, (rez, key) => (o[key] + '').padStart(rez.length, '0'))
  return fmt
}

export function timeAgo(date) {
  const d = typeof date === 'object' ? date : new Date(date)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < (3600 * 24)) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < (3600 * 24 * 30)) {
    return Math.ceil(diff / (3600 * 24)) + '天前'
  } else if (diff < (3600 * 24 * 365)) {
    return Math.ceil(diff / (3600 * 24 * 30)) + '个月前'
  } else {
    return formatDate(date)
  }
}

/* 数字 格式化 */
// export function nFormatter(num, digits) {
//   const si = [
//     { value: 1E18, symbol: 'E' },
//     { value: 1E15, symbol: 'P' },
//     { value: 1E12, symbol: 'T' },
//     { value: 1E9, symbol: 'G' },
//     { value: 1E6, symbol: 'M' },
//     { value: 1E3, symbol: 'k' }
//   ]
//   for (let i = 0; i < si.length; i++) {
//     if (num >= si[i].value) {
//       return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
//     }
//   }
//   return num.toString()
// }

// export function html2Text(val) {
//   const div = document.createElement('div')
//   div.innerHTML = val
//   return div.textContent || div.innerText
// }

// export function toThousandslsFilter(num) {
//   return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
// }
