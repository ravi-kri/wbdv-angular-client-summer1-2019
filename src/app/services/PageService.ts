import {Injectable} from '@angular/core';

@Injectable()
export default class PageService {
  PAGE_ENDPOINT = 'https://wbdv-node-server.herokuapp.com/api/websites/WID/pages'

  createPage = (wid, page) =>
    fetch(this.PAGE_ENDPOINT.replace('WID', wid), {
      method: 'post',
      body: JSON.stringify(page),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

  findPagesForWebsite = wid =>
    fetch(this.PAGE_ENDPOINT.replace('WID', wid))
      .then(response => response.json())

  findPageById = (wid, pid) =>
    fetch(this.PAGE_ENDPOINT.replace('WID', wid) + '/' + pid)
      .then(response => response.json())

  updatePage(websiteId: string, pageId: string, page: { _id: string; title: string; rows: any[] }) {
    fetch(this.PAGE_ENDPOINT.replace('WID', websiteId) + '/' + pageId, {
      method: 'PUT',
      body: JSON.stringify(page),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }

  deletePage(websiteId: string, pageId: string) {
    fetch(this.PAGE_ENDPOINT.replace('WID', websiteId) + '/' + pageId, {
      method: 'DELETE',
    }).then(response => response.json())
  }
}