import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  // Data for genre playlists
  const genrePlaylists = [
    { id: '1', title: 'Hot Hits Canada' },
    { id: '2', title: 'Pop Favourites' },
    { id: '3', title: 'Hip-Hop Central' },
    { id: '4', title: '80s Hard Rock' },
    { id: '5', title: 'All About Country' },
    { id: '6', title: 'Upbeat mix' },
    { id: '7', title: 'Daily Wellness' },
    { id: '8', title: 'Release Radar' },
  ];

  // Data for recent playlists
  const recentPlaylists = [
    { id: '1', title: 'Pop mix', owner: 'User 1' },
    { id: '2', title: 'Hot Hits', owner: 'User 1' },
    { id: '3', title: 'Upbeat Mix', owner: 'User 1' },
    { id: '4', title: 'Daily Wellness', owner: 'User 1' },
    { id: '5', title: 'Hip-Hop Central', owner: 'User 1' },
    { id: '6', title: '80s Hard Rock', owner: 'User 1' },
  ];

  // Data for audiobooks
  const audiobooks = [
    { 
      id: '1', 
      title: 'Mastering Conversations', 
      author: 'Helen Stone',
      premium: true 
    },
    { 
      id: '2', 
      title: 'Control your mind and life', 
      author: 'Eric Robertson',
      premium: true 
    },
    { 
      id: '3', 
      title: 'Ikigai: The Japanese secret', 
      author: 'Hector Garcia',
      premium: true 
    },
  ];

  const handleCategoryPress = (category) => {
    console.log(`${category} pressed`);
    // Add your navigation or action here
  };

  const handlePlaylistPress = (playlist) => {
    console.log(`${playlist} pressed`);
    // Add your navigation or action here
  };

  const handleAudiobookPress = (audiobook) => {
    console.log(`${audiobook} pressed`);
    // Add your navigation or action here
  };

  const CategoryButton = ({ title, active }) => (
    <TouchableOpacity 
      style={[styles.categoryButton, active && styles.activeCategoryButton]}
      onPress={() => handleCategoryPress(title)}
    >
      <Text style={[styles.categoryText, active && styles.activeCategoryText]}>{title}</Text>
    </TouchableOpacity>
  );

  const GenrePlaylistItem = ({ title }) => (
    <TouchableOpacity 
      style={styles.genreItem}
      onPress={() => handlePlaylistPress(title)}
    >
      <View style={styles.genreIconContainer}>
        <Text style={styles.genreIconText}>♪</Text>
      </View>
      <Text style={styles.genreTitle} numberOfLines={1}>{title}</Text>
    </TouchableOpacity>
  );

  const RecentPlaylistItem = ({ title, owner }) => (
    <TouchableOpacity 
      style={styles.recentItem}
      onPress={() => handlePlaylistPress(title)}
    >
      <View style={styles.recentThumbnail}>
        <View style={styles.musicNoteContainer}>
          <Text style={styles.musicNote}>♪</Text>
        </View>
      </View>
      <Text style={styles.recentTitle} numberOfLines={1}>{title}</Text>
      <Text style={styles.recentOwner}>{owner}</Text>
    </TouchableOpacity>
  );

  const AudiobookItem = ({ title, author, premium }) => (
    <TouchableOpacity 
      style={styles.audiobookItem}
      onPress={() => handleAudiobookPress(title)}
    >
      <View style={styles.audiobookCover}>
        <View style={styles.audiobookIconContainer}>
          <Text style={styles.audiobookIcon}>◉</Text>
        </View>
        <View style={styles.likeButton}>
          <Text style={styles.likeIcon}>♥</Text>
        </View>
      </View>
      {premium && (
        <View style={styles.premiumTag}>
          <Text style={styles.premiumText}>Included in Premium</Text>
        </View>
      )}
      <Text style={styles.audiobookTitle} numberOfLines={1}>{title}</Text>
      <Text style={styles.audiobookAuthor}>{author}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Status bar placeholder */}
      <View style={styles.statusBar}>
        <Text style={styles.headerText}>SMIT PATEL</Text>
        <Text style={styles.subHeaderText}>1280935</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <View style={styles.appleIconContainer}>
            <Text style={styles.appleIcon}></Text>
          </View>
          <CategoryButton title="All" active={true} />
          <CategoryButton title="Music" active={false} />
          <CategoryButton title="Podcasts" active={false} />
          <CategoryButton title="Audiobooks" active={false} />
        </View>

        {/* Genre playlists grid */}
        <View style={styles.genreGrid}>
          {genrePlaylists.map((item) => (
            <GenrePlaylistItem key={item.id} title={item.title} />
          ))}
        </View>

        {/* Recent playlists */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recents</Text>
          <View style={styles.recentGrid}>
            {recentPlaylists.map((item) => (
              <RecentPlaylistItem 
                key={item.id} 
                title={item.title}
                owner={item.owner} 
              />
            ))}
          </View>
        </View>

        {/* Audiobooks section */}
        <View style={[styles.sectionContainer, styles.audiobooksSection]}>
          <Text style={styles.sectionTitle}>Audiobooks for you</Text>
          <View style={styles.audiobooksGrid}>
            {audiobooks.map((item) => (
              <AudiobookItem 
                key={item.id} 
                title={item.title} 
                author={item.author}
                premium={item.premium}
              />
            ))}
          </View>
        </View>

        {/* Extra space at bottom */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: '#1A1A1A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#8E8E93',
    fontSize: 12,
  },
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  appleIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleIcon: {
  fontSize: 28,
  color: '#000000',
  fontWeight: 'bold',
},
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  activeCategoryButton: {
    backgroundColor: '#65D36E',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  activeCategoryText: {
    color: '#000000',
  },
  genreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 10,
  },
  genreItem: {
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  genreIconContainer: {
    backgroundColor: '#4A90E2',
    width: 32,
    height: 32,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  genreIconText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  genreTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recentItem: {
    width: '31%',
    marginBottom: 15,
  },
  recentThumbnail: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicNoteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicNote: {
    color: '#FFFFFF',
    fontSize: 40,
  },
  recentTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
  },
  recentOwner: {
    color: '#8E8E93',
    fontSize: 11,
  },
  audiobooksSection: {
    marginTop: 30,
  },
  audiobooksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  audiobookItem: {
    width: '48%',
    marginBottom: 20,
  },
  audiobookCover: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  audiobookIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  audiobookIcon: {
    fontSize: 40,
    color: '#000',
  },
  likeButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeIcon: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  premiumTag: {
    backgroundColor: '#65D36E',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 3,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  premiumText: {
    color: '#000000',
    fontSize: 9,
    fontWeight: '500',
  },
  audiobookTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4,
  },
  audiobookAuthor: {
    color: '#8E8E93',
    fontSize: 11,
  },
  bottomSpace: {
    height: 40,
  },
});

export default App;
// git upload