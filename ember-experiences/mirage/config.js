export default function() {
  this.namespace = '/api';

  this.get('/experiences', function() {
    return {
      data: [{
        type: 'experiences',
        id: 'first-experience',
        attributes: {
          cost: '$80',
          duration: '2 hours',
          tag: 'tag1',
          title: 'Title of first experience',
          details: 'Details of first experience.',
          provided: 'What is provided for first experience.',
          address: 'Address of first experience'
        }
      }, {
        type: 'experiences',
        id: 'second-experience',
        attributes: {
          cost: '$120',
          duration: '3 hours',
          tag: 'tag2',
          title: 'Title of second experience',
          details: 'Details of second experience.',
          provided: 'What is provided for second experience.',
          address: 'Address of second experience'
        }
      }, {
        type: 'experiences',
        id: 'third-experience',
        attributes: {
          cost: '$60',
          duration: '1 hour',
          tag: 'tag3',
          title: 'Title of third experience',
          details: 'Details of third experience.',
          provided: 'What is provided for third experience.',
          address: 'Address of third experience'
        }
      }]
    };
  });
}
