/**
 * @author Ivaylo Ivanov
 * @public
 * @description Animated transitions between routes
 */

export default function() {
  const routes = [
    'addressBook',
    'addressBook.create',
  ];
  this.transition(
    this.toRoute(routes),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
