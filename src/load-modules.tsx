import { joinImagePath } from './utils';

const paths: string[] = ["icon-sedans.svg", "icon-suvs.svg", "icon-luxury.svg"];
const preloads: string[] = paths.map( ( path: string ) => joinImagePath( path ) );
  
export default function loadModules( head: HTMLHeadElement ){
  for ( var link of preloads ){
    let preload = document.createElement( "link" );
        preload.setAttribute('rel', 'preload');
      preload.setAttribute('href', link);
    head.append( preload );
  }
}