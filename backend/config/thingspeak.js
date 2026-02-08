// ThingSpeak API configuration

const BASE_URL = 'https://api.thingspeak.com';

const FIELD_MAPPING = {
    temperature: 'field1',
    humidity: 'field2',
    air_quality: 'field3'
};

const LOCATIONS = [
    { name: 'Location A', id: '1' },
    { name: 'Location B', id: '2' },
    { name: 'Location C', id: '3' }
];

module.exports = { BASE_URL, FIELD_MAPPING, LOCATIONS };