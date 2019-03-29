

// just a api for test what object behavior

function toString(val) {
  console.log(Object.prototype.toString.call(val))
  return Object.prototype.toString.call(val)
}

toString(new Date);    // [object Date]
toString(new String);  // [object String]
toString(Math);        // [object Math]
toString(new Array);       // [object Array]
toString(function a() {});       // [object Function]