import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

// METTRE VOTRE PROPRE CLÉ D'API !!
const googleApiKey = "AIzaSyAC3AGAv4jhQucaKKYEWARDWGaNZxwvUp0";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  
  constructor(public http : HttpClient) { }

 async searchVideoId(searchText : string) : Promise<string>{
   let x =  await lastValueFrom(this.http.get<any>('https://www.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1&key='+googleApiKey+'&q='+searchText))
    // Requête pour obtenir l'Id d'une vidéo YouTube ici ! Utilisez le paramètre searchText.
console.log(x.items[0].id.videoId);
    // Remplacez ce return par l'id de la vidéo obtenue.
    return x.items[0].id.videoId;
  }

}
