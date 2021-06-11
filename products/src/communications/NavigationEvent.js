import SyntheticEvent from './SyntheticEvent'

export default class NavigationEvent extends SyntheticEvent {
  constructor() {
    super('navigation')
  }

  static buildWithLocation(location) {
    const event = new NavigationEvent()
    event.add(location)
    event.log('color: orange;')
    return event
  }
}
