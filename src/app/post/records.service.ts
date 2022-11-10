import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Ammar1, 'E1231', 'ammar1@net.com'"]
  info2: string[] = ["Ammar2, 'E1232', 'ammar2@net.com'"]
  info3: string[] = ["Ammar3, 'E1233', 'ammar3@net.com'"]
  info4: string[] = ["Ammar4, 'E1234', 'ammar4@net.com'"]
  info5: string[] = ["Ammar5, 'E1235', 'ammar5@net.com'"]

  getinfo() : string[]{
    return this.info1
  }

  getinfo2() : string[]{
    return this.info2
  }

  getinfo3() : string[]{
    return this.info3
  }

  getinfo4() : string[]{
    return this.info4
  }

  getinfo5() : string[]{
    return this.info5
  }

  constructor() { }
}
