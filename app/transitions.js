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
