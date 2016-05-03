// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Track

export default class Track {
  constructor(trackId, trackType) {
    this.customData = {};
    this.language = null;
    this.name = null;
    this.subtype = null;
    this.trackContentId = null;
    this.trackContentType = null;
    this.trackId = trackId;
    this.type = trackType;
  }
}
